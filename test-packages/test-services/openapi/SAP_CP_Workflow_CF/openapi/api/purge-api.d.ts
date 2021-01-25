/**
 * Workflow API for Cloud Foundry
 * This API uses the SAP Cloud Platform Workflow service. With the API, you can, for example, start new workflow instances and work with tasks.  Note (relevant only for SAP API Business Hub): For authentication purposes, the API uses OAuth 2.0 security (with JSON Web Token, JWT). Thus, \"Try Out\" only works with an explicitly configured environment. For more information on how to obtain the necessary parameters, please see [Determine Service Configuration Parameters](https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/abb1f66b2c3b4983b6b656654cfc3d2b.html) in the documentation. The OAuth client you use must have [extended scopes](https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/baf2847f6d1c401a83ca3a1427b8ff84.html).  Note: These APIs are designed for loosely coupled clients. This means:  - If workflow service adds fields to responses, the API version number does not increase. Your client must ignore new fields. - The order of fields in responses and of entries in arrays may change. This applies unless the API provides an explicit means to specify the desired order.
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
/**
 * PurgeApi - axios parameter creator
 * @export
 */
export declare const PurgeApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Completely erases all workflow definitions, all workflow instances, and all form definitions.  Roles permitted to execute this operation:  - Global roles:  WorkflowTenantOperator  - Scope: DATA_PURGE
     * @summary Purge instances and definitions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1PurgePost: (options?: any) => Promise<RequestArgs>;
};
/**
 * PurgeApi - functional programming interface
 * @export
 */
export declare const PurgeApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Completely erases all workflow definitions, all workflow instances, and all form definitions.  Roles permitted to execute this operation:  - Global roles:  WorkflowTenantOperator  - Scope: DATA_PURGE
     * @summary Purge instances and definitions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1PurgePost(options?: any): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
};
/**
 * PurgeApi - factory interface
 * @export
 */
export declare const PurgeApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Completely erases all workflow definitions, all workflow instances, and all form definitions.  Roles permitted to execute this operation:  - Global roles:  WorkflowTenantOperator  - Scope: DATA_PURGE
     * @summary Purge instances and definitions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    v1PurgePost(options?: any): AxiosPromise<void>;
};
/**
 * PurgeApi - object-oriented interface
 * @export
 * @class PurgeApi
 * @extends {BaseAPI}
 */
export declare class PurgeApi extends BaseAPI {
    /**
     * Completely erases all workflow definitions, all workflow instances, and all form definitions.  Roles permitted to execute this operation:  - Global roles:  WorkflowTenantOperator  - Scope: DATA_PURGE
     * @summary Purge instances and definitions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PurgeApi
     */
    v1PurgePost(options?: any): Promise<import("axios").AxiosResponse<void>>;
}
//# sourceMappingURL=purge-api.d.ts.map