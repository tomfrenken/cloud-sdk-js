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
import { JobError } from './job-error';
/**
 *
 * @export
 * @interface Job
 */
export interface Job {
    /**
     * The status of the job.
     * @type {string}
     * @memberof Job
     */
    status?: JobStatusEnum;
    /**
     * The details of the job.
     * @type {object}
     * @memberof Job
     */
    details?: object;
    /**
     *
     * @type {JobError}
     * @memberof Job
     */
    error?: JobError;
}
/**
    * @export
    * @enum {string}
    */
export declare enum JobStatusEnum {
    RUNNING = "RUNNING",
    ERRONEOUS = "ERRONEOUS"
}
//# sourceMappingURL=job.d.ts.map