import { TestEntitySharesEntityTypeRequestBuilder } from './TestEntitySharesEntityTypeRequestBuilder';
import { Moment, Duration } from 'moment';
import { BigNumber } from 'bignumber.js';
import { TestComplexType, TestComplexTypeField } from './TestComplexType';
import { TestEnumType } from './TestEnumType';
import { TestEnumTypeWithOneMember } from './TestEnumTypeWithOneMember';
import { AllFields, AnyField, BigNumberField, BooleanField, CollectionField, CustomFieldV4, DateField, DurationField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_TestEntitySharesEntityType" of service "API_TEST_SRV".
 */
export declare class TestEntitySharesEntityType extends EntityV4 implements TestEntitySharesEntityTypeType {
    /**
     * Technical entity name for TestEntitySharesEntityType.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Key Property Guid.
     */
    keyPropertyGuid: string;
    /**
     * Key Property String.
     */
    keyPropertyString: string;
    /**
     * String Property.
     * Maximum length: 10.
     * @nullable
     */
    stringProperty?: string;
    /**
     * Boolean Property.
     * @nullable
     */
    booleanProperty?: boolean;
    /**
     * Guid Property.
     * @nullable
     */
    guidProperty?: string;
    /**
     * Int 16 Property.
     * @nullable
     */
    int16Property?: number;
    /**
     * Int 32 Property.
     * @nullable
     */
    int32Property?: number;
    /**
     * Int 64 Property.
     * @nullable
     */
    int64Property?: BigNumber;
    /**
     * Decimal Property.
     * @nullable
     */
    decimalProperty?: BigNumber;
    /**
     * Single Property.
     * @nullable
     */
    singleProperty?: number;
    /**
     * Double Property.
     * @nullable
     */
    doubleProperty?: number;
    /**
     * Float Property.
     * @nullable
     */
    floatProperty?: number;
    /**
     * Time Of Day Property.
     * @nullable
     */
    timeOfDayProperty?: Time;
    /**
     * Date Property.
     * @nullable
     */
    dateProperty?: Moment;
    /**
     * Date Time Off Set Property.
     * @nullable
     */
    dateTimeOffSetProperty?: Moment;
    /**
     * Duration Property.
     * @nullable
     */
    durationProperty?: Duration;
    /**
     * Byte Property.
     * @nullable
     */
    byteProperty?: number;
    /**
     * S Byte Property.
     * @nullable
     */
    sByteProperty?: number;
    /**
     * Geography Point Property.
     * @nullable
     */
    geographyPointProperty?: any;
    /**
     * Something The Sdk Does Not Support.
     * @nullable
     */
    somethingTheSdkDoesNotSupport?: any;
    /**
     * Collection Property.
     * Maximum length: 10.
     * @nullable
     */
    collectionProperty?: string[];
    /**
     * Complex Type Property.
     * @nullable
     */
    complexTypeProperty?: TestComplexType;
    /**
     * Complex Type Collection Property.
     * @nullable
     */
    complexTypeCollectionProperty?: TestComplexType[];
    /**
     * Enum Property.
     * @nullable
     */
    enumProperty?: TestEnumType;
    /**
     * Enum Property With One Member.
     * @nullable
     */
    enumPropertyWithOneMember?: TestEnumTypeWithOneMember;
    /**
     * Enum Collection Property.
     * @nullable
     */
    enumCollectionProperty?: TestEnumType[];
    /**
     * One-to-many navigation property to the [[TestEntityMultiLink]] entity.
     */
    toMultiLink: TestEntityMultiLink[];
    /**
     * One-to-many navigation property to the [[TestEntityMultiLink]] entity.
     */
    toOtherMultiLink: TestEntityMultiLink[];
    /**
     * One-to-one navigation property to the [[TestEntitySingleLink]] entity.
     */
    toSingleLink: TestEntitySingleLink;
    /**
     * Returns an entity builder to construct instances of `TestEntitySharesEntityType`.
     * @returns A builder that constructs instances of entity type `TestEntitySharesEntityType`.
     */
    static builder(): EntityBuilderType<TestEntitySharesEntityType, TestEntitySharesEntityTypeType>;
    /**
     * Returns a request builder to construct requests for operations on the `TestEntitySharesEntityType` entity type.
     * @returns A `TestEntitySharesEntityType` request builder.
     */
    static requestBuilder(): TestEntitySharesEntityTypeRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TestEntitySharesEntityType`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TestEntitySharesEntityType`.
     */
    static customField(fieldName: string): CustomFieldV4<TestEntitySharesEntityType>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { TestEntityMultiLink, TestEntityMultiLinkType } from './TestEntityMultiLink';
import { TestEntitySingleLink, TestEntitySingleLinkType } from './TestEntitySingleLink';
export interface TestEntitySharesEntityTypeType {
    keyPropertyGuid: string;
    keyPropertyString: string;
    stringProperty?: string | null;
    booleanProperty?: boolean | null;
    guidProperty?: string | null;
    int16Property?: number | null;
    int32Property?: number | null;
    int64Property?: BigNumber | null;
    decimalProperty?: BigNumber | null;
    singleProperty?: number | null;
    doubleProperty?: number | null;
    floatProperty?: number | null;
    timeOfDayProperty?: Time | null;
    dateProperty?: Moment | null;
    dateTimeOffSetProperty?: Moment | null;
    durationProperty?: Duration | null;
    byteProperty?: number | null;
    sByteProperty?: number | null;
    geographyPointProperty?: any | null;
    somethingTheSdkDoesNotSupport?: any | null;
    collectionProperty?: string[] | null;
    complexTypeProperty?: TestComplexType | null;
    complexTypeCollectionProperty?: TestComplexType[] | null;
    enumProperty?: TestEnumType | null;
    enumPropertyWithOneMember?: TestEnumTypeWithOneMember | null;
    enumCollectionProperty?: TestEnumType[] | null;
    toMultiLink: TestEntityMultiLinkType[];
    toOtherMultiLink: TestEntityMultiLinkType[];
    toSingleLink: TestEntitySingleLinkType;
}
export declare namespace TestEntitySharesEntityType {
    /**
     * Static representation of the [[keyPropertyGuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KEY_PROPERTY_GUID: StringField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[keyPropertyString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KEY_PROPERTY_STRING: StringField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[stringProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STRING_PROPERTY: StringField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[booleanProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOOLEAN_PROPERTY: BooleanField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[guidProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GUID_PROPERTY: StringField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[int16Property]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INT_16_PROPERTY: NumberField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[int32Property]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INT_32_PROPERTY: NumberField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[int64Property]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INT_64_PROPERTY: BigNumberField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[decimalProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DECIMAL_PROPERTY: BigNumberField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[singleProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SINGLE_PROPERTY: NumberField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[doubleProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOUBLE_PROPERTY: NumberField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[floatProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLOAT_PROPERTY: NumberField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[timeOfDayProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_OF_DAY_PROPERTY: TimeField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[dateProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_PROPERTY: DateField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[dateTimeOffSetProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_TIME_OFF_SET_PROPERTY: DateField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[durationProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DURATION_PROPERTY: DurationField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[byteProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BYTE_PROPERTY: NumberField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[sByteProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const S_BYTE_PROPERTY: NumberField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[geographyPointProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GEOGRAPHY_POINT_PROPERTY: AnyField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[somethingTheSdkDoesNotSupport]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOMETHING_THE_SDK_DOES_NOT_SUPPORT: AnyField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[collectionProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLLECTION_PROPERTY: CollectionField<TestEntitySharesEntityType, 'Edm.String'>;
    /**
     * Static representation of the [[complexTypeProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPLEX_TYPE_PROPERTY: TestComplexTypeField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[complexTypeCollectionProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPLEX_TYPE_COLLECTION_PROPERTY: CollectionField<TestEntitySharesEntityType, TestComplexType>;
    /**
     * Static representation of the [[enumProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENUM_PROPERTY: EnumField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[enumPropertyWithOneMember]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENUM_PROPERTY_WITH_ONE_MEMBER: EnumField<TestEntitySharesEntityType>;
    /**
     * Static representation of the [[enumCollectionProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENUM_COLLECTION_PROPERTY: CollectionField<TestEntitySharesEntityType, 'Edm.Enum'>;
    /**
     * Static representation of the one-to-many navigation property [[toMultiLink]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_MULTI_LINK: OneToManyLink<TestEntitySharesEntityType, TestEntityMultiLink>;
    /**
     * Static representation of the one-to-many navigation property [[toOtherMultiLink]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_OTHER_MULTI_LINK: OneToManyLink<TestEntitySharesEntityType, TestEntityMultiLink>;
    /**
     * Static representation of the one-to-one navigation property [[toSingleLink]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SINGLE_LINK: OneToOneLink<TestEntitySharesEntityType, TestEntitySingleLink>;
    /**
     * All fields of the TestEntitySharesEntityType entity.
     */
    const _allFields: Array<StringField<TestEntitySharesEntityType> | BooleanField<TestEntitySharesEntityType> | NumberField<TestEntitySharesEntityType> | BigNumberField<TestEntitySharesEntityType> | TimeField<TestEntitySharesEntityType> | DateField<TestEntitySharesEntityType> | DurationField<TestEntitySharesEntityType> | AnyField<TestEntitySharesEntityType> | CollectionField<TestEntitySharesEntityType, 'Edm.String'> | TestComplexTypeField<TestEntitySharesEntityType> | CollectionField<TestEntitySharesEntityType, TestComplexType> | EnumField<TestEntitySharesEntityType> | CollectionField<TestEntitySharesEntityType, 'Edm.Enum'> | OneToManyLink<TestEntitySharesEntityType, TestEntityMultiLink> | OneToOneLink<TestEntitySharesEntityType, TestEntitySingleLink>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TestEntitySharesEntityType>;
    /**
     * All key fields of the TestEntitySharesEntityType entity.
     */
    const _keyFields: Array<Field<TestEntitySharesEntityType>>;
    /**
     * Mapping of all key field names to the respective static field property TestEntitySharesEntityType.
     */
    const _keys: {
        [keys: string]: Field<TestEntitySharesEntityType>;
    };
}
//# sourceMappingURL=TestEntitySharesEntityType.d.ts.map