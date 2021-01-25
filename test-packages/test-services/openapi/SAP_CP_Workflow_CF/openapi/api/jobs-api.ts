/* tslint:disable */
/* eslint-disable */
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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Job } from '../model';
// @ts-ignore
import { TechnicalError } from '../model';
// @ts-ignore
import { UnauthorizedError } from '../model';
/**
 * JobsApi - axios parameter creator
 * @export
 */
export const JobsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Tracks the status of API requests, which the server executed asynchronously.          Roles permitted to execute this operation:  - Global roles:  WorkflowTenantOperator  - Scope: JOB_STATUS_GET 
         * @summary Retrieve Job status
         * @param {string} jobId The ID of the job for which you check the status. Typically, the ID has been retrieved from another API request that was processed asynchronously. The ID is at most 36 characters long.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getV1JobsByJobId: async (jobId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobId' is not null or undefined
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling getV1JobsByJobId.');
            }
            const localVarPath = `/v1/jobs/{jobId}`
                .replace(`{${"jobId"}}`, encodeURIComponent(String(jobId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Oauth2_AuthorizationCode required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("Oauth2_AuthorizationCode", [])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication Oauth2_ClientCredentials required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("Oauth2_ClientCredentials", [])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * JobsApi - functional programming interface
 * @export
 */
export const JobsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Tracks the status of API requests, which the server executed asynchronously.          Roles permitted to execute this operation:  - Global roles:  WorkflowTenantOperator  - Scope: JOB_STATUS_GET 
         * @summary Retrieve Job status
         * @param {string} jobId The ID of the job for which you check the status. Typically, the ID has been retrieved from another API request that was processed asynchronously. The ID is at most 36 characters long.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getV1JobsByJobId(jobId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Job>> {
            const localVarAxiosArgs = await JobsApiAxiosParamCreator(configuration).getV1JobsByJobId(jobId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * JobsApi - factory interface
 * @export
 */
export const JobsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Tracks the status of API requests, which the server executed asynchronously.          Roles permitted to execute this operation:  - Global roles:  WorkflowTenantOperator  - Scope: JOB_STATUS_GET 
         * @summary Retrieve Job status
         * @param {string} jobId The ID of the job for which you check the status. Typically, the ID has been retrieved from another API request that was processed asynchronously. The ID is at most 36 characters long.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getV1JobsByJobId(jobId: string, options?: any): AxiosPromise<Job> {
            return JobsApiFp(configuration).getV1JobsByJobId(jobId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * JobsApi - object-oriented interface
 * @export
 * @class JobsApi
 * @extends {BaseAPI}
 */
export class JobsApi extends BaseAPI {
    /**
     * Tracks the status of API requests, which the server executed asynchronously.          Roles permitted to execute this operation:  - Global roles:  WorkflowTenantOperator  - Scope: JOB_STATUS_GET 
     * @summary Retrieve Job status
     * @param {string} jobId The ID of the job for which you check the status. Typically, the ID has been retrieved from another API request that was processed asynchronously. The ID is at most 36 characters long.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    public getV1JobsByJobId(jobId: string, options?: any) {
        return JobsApiFp(this.configuration).getV1JobsByJobId(jobId, options).then((request) => request(this.axios, this.basePath));
    }
}
