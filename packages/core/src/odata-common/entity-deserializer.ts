import { createLogger } from '@sap-cloud-sdk/util';
import {
  isSelectedProperty,
  Field,
  Link,
  EdmTypeField,
  ComplexTypeField,
  CollectionField,
  OneToOneLink,
  isExpandedProperty,
  EntityBase,
  Constructable,
  ComplexTypeNamespace,
  isComplexTypeNameSpace,
  EdmTypeShared,
  isEdmType,
  PropertyMetadata, EdmTypeMappingAll
} from '../odata-common';
import { EdmToPrimitiveV2, EdmTypeV2 } from '../odata-v2';
import { EdmToPrimitiveV4, EdmTypeV4 } from '../odata-v4';
import { toPropertyFormat } from './name-converter';
import { EdmTypeMappingV2} from '../odata-v2';
import { EdmTypeMappingV4} from '../odata-v4';

const logger = createLogger({
  package: 'core',
  messageContext: 'entity-deserializer'
});

/**
 * Interface representing the return type of the builder function [[entityDeserializer]]
 */
export class EntityDeserializer<EntityT extends EntityBase = any> {
  customDeserializer?: Partial<EdmTypeMappingAll>;
  constructor(
    // TODO rename to defaultDeserializeEntity
    public deserializeEntity: (
      json: any,
      entityConstructor: Constructable<EntityT>,
      requestHeader?: any,
      customDeserializer?: Partial<EdmTypeMappingAll>
    ) => EntityT,
    public deserializeComplexType: (
      json: Record<string, any>,
      complexType: ComplexTypeNamespace<any>
    ) => any
  ) {}
  // TODO rename to deserializeEntity
  deserializeEntityCustomized(
    json: any,
    entityConstructor: Constructable<EntityT>,
    requestHeader?: any
  ): EntityT {
    return this.deserializeEntity(
      json,
      entityConstructor,
      requestHeader,
      this.customDeserializer
    );
  }
}

type EdmToTsTypeV2<EdmT extends EdmTypeV2 = any> = (
  value: any,
  edmType: EdmTypeShared<'v2'>
) => EdmToPrimitiveV2<EdmT>;
type EdmToTsTypeV4<EdmT extends EdmTypeV4 = any> = (
  value: any,
  edmType: EdmTypeShared<'v4'>,
  customDeserializer?: Partial<EdmTypeMappingV4>
) => EdmToPrimitiveV4<EdmT>;
type ExtractODataETagType = (json: Record<string, any>) => string | undefined;
type ExtractDataFromOneToManyLinkType = (data: any) => any[];

/**
 * Constructs an entityDeserializer given the OData v2 or v4 specific methods.
 * The concrete deserializers are created in odata/v2/entity-deserializer.ts and odata/v4/entity-deserializer.ts
 * @param edmToTs - Converters  emd input to ts values.
 * @param extractODataETag - Extractor for the Etag.
 * @param extractDataFromOneToManyLink - Extractor for data related to one to many links.
 * @returns a entity deserializer as defined by [[EntityDeserializer]]
 */
export function entityDeserializer(
  edmToTs: EdmToTsTypeV2 | EdmToTsTypeV4,
  extractODataETag: ExtractODataETagType,
  extractDataFromOneToManyLink: ExtractDataFromOneToManyLinkType
): EntityDeserializer {
  /**
   * Converts the JSON payload for a single entity into an instance of the corresponding generated entity class.
   * It sets the remote state to the data provided by the JSON payload.
   * If a version identifier is found in the '__metadata' or in the request header, the method also sets it.
   *
   * @param json - The JSON payload.
   * @param entityConstructor - The constructor function of the entity class.
   * @param requestHeader - Optional parameter which may be used to add a version identifier (etag) to the entity
   * @returns An instance of the entity class.
   */
  function deserializeEntity<EntityT extends EntityBase, JsonT>(
    json: Partial<JsonT>,
    entityConstructor: Constructable<EntityT>,
    requestHeader?: any,
    customDeserializer?: Partial<EdmTypeMappingAll>
  ): EntityT {
    const etag = extractODataETag(json) || extractEtagFromHeader(requestHeader);
    return (entityConstructor._allFields as (Field<EntityT> | Link<EntityT>)[]) // type assertion for backwards compatibility, TODO: remove in v2.0
      .filter(field => isSelectedProperty(json, field))
      .reduce((entity, staticField) => {
        entity[toPropertyFormat(staticField._fieldName)] = getFieldValue(
          json,
          staticField,
          customDeserializer
        );
        return entity;
      }, new entityConstructor())
      .initializeCustomFields(extractCustomFields(json, entityConstructor))
      .setVersionIdentifier(etag)
      .setOrInitializeRemoteState();
  }

  function getFieldValue<EntityT extends EntityBase, JsonT>(
    json: Partial<JsonT>,
    field: Field<EntityT> | Link<EntityT>,
    customDeserializer?: Partial<EdmTypeMappingAll>
  ) {
    if (field instanceof EdmTypeField) {
      return edmToTs(json[field._fieldName], field.edmType, customDeserializer);
    }
    if (field instanceof Link) {
      return getLinkFromJson(json, field);
    }
    if (field instanceof ComplexTypeField) {
      if (json[field._fieldName]) {
        return field._complexType
          ? deserializeComplexType(json[field._fieldName], field._complexType)
          : deserializeComplexTypeLegacy(json[field._fieldName], field);
      }
      return json[field._fieldName];
    }
    if (field instanceof CollectionField) {
      return deserializeCollectionType(
        json[field._fieldName],
        field._fieldType
      );
    }
  }

  function getLinkFromJson<
    EntityT extends EntityBase,
    LinkedEntityT extends EntityBase,
    JsonT
  >(json: Partial<JsonT>, link: Link<EntityT, LinkedEntityT>) {
    return link instanceof OneToOneLink
      ? getSingleLinkFromJson(json, link)
      : getMultiLinkFromJson(json, link);
  }

  // Be careful: if the return type is changed to `LinkedEntityT | undefined`, the test 'navigation properties should never be undefined' of the 'business-partner.spec.ts' will fail.
  // Not sure the purpose of the usage of null.
  function getSingleLinkFromJson<
    EntityT extends EntityBase,
    LinkedEntityT extends EntityBase,
    JsonT
  >(
    json: Partial<JsonT>,
    link: Link<EntityT, LinkedEntityT>
  ): LinkedEntityT | null {
    if (isExpandedProperty(json, link)) {
      return deserializeEntity(json[link._fieldName], link._linkedEntity);
    }
    return null;
  }

  function getMultiLinkFromJson<
    EntityT extends EntityBase,
    LinkedEntityT extends EntityBase,
    JsonT
  >(
    json: Partial<JsonT>,
    link: Link<EntityT, LinkedEntityT>
  ): LinkedEntityT[] | undefined {
    if (isSelectedProperty(json, link)) {
      const results = extractDataFromOneToManyLink(json[link._fieldName]);
      return results.map(linkJson =>
        deserializeEntity(linkJson, link._linkedEntity)
      );
    }
  }

  // TODO: get rid of this function in v2.0
  function deserializeComplexTypeLegacy<EntityT extends EntityBase>(
    json: Record<string, any>,
    complexTypeField: ComplexTypeField<EntityT>
  ): Record<string, any> | null {
    logger.warn(
      'It seems that you are using an outdated OData client. To make this warning disappear, please regenerate your client using the latest version of the SAP Cloud SDK generator.'
    );
    if (json === null) {
      return null;
    }
    return Object.entries(complexTypeField)
      .filter(
        ([_, field]) =>
          (field instanceof EdmTypeField ||
            field instanceof ComplexTypeField) &&
          typeof json[field._fieldName] !== 'undefined'
      )
      .reduce(
        (complexTypeObject, [fieldName, field]) => ({
          ...complexTypeObject,
          [toPropertyFormat(fieldName)]:
            field instanceof EdmTypeField
              ? edmToTs(json[field._fieldName], field.edmType)
              : deserializeComplexTypeLegacy(json[field._fieldName], field)
        }),
        {}
      );
  }
  // TODO fix this
  function deserializeComplexTypeProperty(
    propertyValue: any,
    propertyMetadata: PropertyMetadata
  ) {
    if (propertyMetadata.isCollection) {
      return deserializeCollectionType(propertyValue, propertyMetadata.type);
    }

    if (isComplexTypeNameSpace(propertyMetadata.type)) {
      return deserializeComplexType(propertyValue, propertyMetadata.type);
    }

    return edmToTs(propertyValue, propertyMetadata.type);
  }
  // TODO fix this
  function deserializeComplexType(
    json: Record<string, any>,
    complexType: ComplexTypeNamespace<any>
  ): any {
    if (json === null) {
      return null;
    }

    return complexType._propertyMetadata
      .map(property => ({
        ...(typeof json[property.originalName] !== 'undefined' && {
          [property.name]: deserializeComplexTypeProperty(
            json[property.originalName],
            property
          )
        })
      }))
      .reduce((complexTypeInstance, property) => ({
        ...complexTypeInstance,
        ...property
      }));
  }
  // TODO fix this
  function deserializeCollectionType<
    FieldT extends EdmTypeShared<'any'> | Record<string, any>
  >(json: any[], fieldType: FieldT) {
    if (isEdmType(fieldType)) {
      return json.map(val => edmToTs(val, fieldType));
    }
    if (isComplexTypeNameSpace(fieldType)) {
      return json.map(val => deserializeComplexType(val, fieldType));
    }
  }

  return new EntityDeserializer(deserializeEntity, deserializeComplexType);
}

export function extractEtagFromHeader(headers: any): string | undefined {
  return headers ? headers['Etag'] || headers['etag'] : undefined;
}

/**
 * Extracts all custom fields from the JSON payload for a single entity.
 * In this context, a custom fields is every property that is not known in the corresponding entity class.
 *
 * @param json - The JSON payload.
 * @param entityConstructor - The constructor function of the entity class.
 * @returns An object containing the custom fields as key-value pairs.
 */
export function extractCustomFields<EntityT extends EntityBase, JsonT>(
  json: Partial<JsonT>,
  entityConstructor: Constructable<EntityT>
): Record<string, any> {
  const regularODataProperties = [
    '__metadata',
    '__deferred',
    // type assertion for backwards compatibility, TODO: remove in v2.0
    ...(entityConstructor._allFields as (Field<EntityT> | Link<EntityT>)[]).map(
      field => field._fieldName
    )
  ];
  const regularFields = new Set<string>(regularODataProperties);
  return Object.keys(json)
    .filter(key => !regularFields.has(key))
    .reduce((customFields, key) => {
      customFields[key] = json[key];
      return customFields;
    }, {});
}
