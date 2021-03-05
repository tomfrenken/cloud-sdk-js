/**
 * Test API
 * Test API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { SimpleTestEntity } from '../model';
/**
 * TestCaseApi - axios parameter creator
 * @export
 */
export declare const TestCaseApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    duplicateOperationId: (options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    duplicateOperationId1: (options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    duplicateOperationId2: (options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    duplicateOperationId3: (options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTestCasesNoOperationId: (options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {string} duplicateParam
     * @param {string} duplicateParam2
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testCaseGetDuplicateParameters: (duplicateParam: string, duplicateParam2: string, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {string} requiredPathItemQueryParam
     * @param {string} requiredPathItemPathParam
     * @param {string} requiredQueryParam
     * @param {string} [optionalQueryParam]
     * @param {string} [optionalPathItemQueryParam] Overrides original path item query parameter.
     * @param {SimpleTestEntity} [simpleTestEntity]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testCaseGetRequiredParameters: (requiredPathItemQueryParam: string, requiredPathItemPathParam: string, requiredQueryParam: string, optionalQueryParam?: string | undefined, optionalPathItemQueryParam?: string | undefined, simpleTestEntity?: SimpleTestEntity | undefined, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {string} requiredPathItemQueryParam
     * @param {string} requiredPathItemPathParam
     * @param {string} requiredQueryParam
     * @param {SimpleTestEntity} simpleTestEntity
     * @param {string} [optionalPathItemQueryParam]
     * @param {string} [optionalQueryParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testCasePostRequiredParameters: (requiredPathItemQueryParam: string, requiredPathItemPathParam: string, requiredQueryParam: string, simpleTestEntity: SimpleTestEntity, optionalPathItemQueryParam?: string | undefined, optionalQueryParam?: string | undefined, options?: any) => Promise<RequestArgs>;
};
/**
 * TestCaseApi - functional programming interface
 * @export
 */
export declare const TestCaseApiFp: (configuration?: Configuration | undefined) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    duplicateOperationId(options?: any): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    duplicateOperationId1(options?: any): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    duplicateOperationId2(options?: any): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    duplicateOperationId3(options?: any): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTestCasesNoOperationId(options?: any): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
    /**
     *
     * @param {string} duplicateParam
     * @param {string} duplicateParam2
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testCaseGetDuplicateParameters(duplicateParam: string, duplicateParam2: string, options?: any): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
    /**
     *
     * @param {string} requiredPathItemQueryParam
     * @param {string} requiredPathItemPathParam
     * @param {string} requiredQueryParam
     * @param {string} [optionalQueryParam]
     * @param {string} [optionalPathItemQueryParam] Overrides original path item query parameter.
     * @param {SimpleTestEntity} [simpleTestEntity]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testCaseGetRequiredParameters(requiredPathItemQueryParam: string, requiredPathItemPathParam: string, requiredQueryParam: string, optionalQueryParam?: string | undefined, optionalPathItemQueryParam?: string | undefined, simpleTestEntity?: SimpleTestEntity | undefined, options?: any): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
    /**
     *
     * @param {string} requiredPathItemQueryParam
     * @param {string} requiredPathItemPathParam
     * @param {string} requiredQueryParam
     * @param {SimpleTestEntity} simpleTestEntity
     * @param {string} [optionalPathItemQueryParam]
     * @param {string} [optionalQueryParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testCasePostRequiredParameters(requiredPathItemQueryParam: string, requiredPathItemPathParam: string, requiredQueryParam: string, simpleTestEntity: SimpleTestEntity, optionalPathItemQueryParam?: string | undefined, optionalQueryParam?: string | undefined, options?: any): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>>;
};
/**
 * TestCaseApi - factory interface
 * @export
 */
export declare const TestCaseApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    duplicateOperationId(options?: any): AxiosPromise<void>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    duplicateOperationId1(options?: any): AxiosPromise<void>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    duplicateOperationId2(options?: any): AxiosPromise<void>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    duplicateOperationId3(options?: any): AxiosPromise<void>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTestCasesNoOperationId(options?: any): AxiosPromise<void>;
    /**
     *
     * @param {string} duplicateParam
     * @param {string} duplicateParam2
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testCaseGetDuplicateParameters(duplicateParam: string, duplicateParam2: string, options?: any): AxiosPromise<void>;
    /**
     *
     * @param {string} requiredPathItemQueryParam
     * @param {string} requiredPathItemPathParam
     * @param {string} requiredQueryParam
     * @param {string} [optionalQueryParam]
     * @param {string} [optionalPathItemQueryParam] Overrides original path item query parameter.
     * @param {SimpleTestEntity} [simpleTestEntity]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testCaseGetRequiredParameters(requiredPathItemQueryParam: string, requiredPathItemPathParam: string, requiredQueryParam: string, optionalQueryParam?: string | undefined, optionalPathItemQueryParam?: string | undefined, simpleTestEntity?: SimpleTestEntity | undefined, options?: any): AxiosPromise<void>;
    /**
     *
     * @param {string} requiredPathItemQueryParam
     * @param {string} requiredPathItemPathParam
     * @param {string} requiredQueryParam
     * @param {SimpleTestEntity} simpleTestEntity
     * @param {string} [optionalPathItemQueryParam]
     * @param {string} [optionalQueryParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testCasePostRequiredParameters(requiredPathItemQueryParam: string, requiredPathItemPathParam: string, requiredQueryParam: string, simpleTestEntity: SimpleTestEntity, optionalPathItemQueryParam?: string | undefined, optionalQueryParam?: string | undefined, options?: any): AxiosPromise<void>;
};
/**
 * TestCaseApi - object-oriented interface
 * @export
 * @class TestCaseApi
 * @extends {BaseAPI}
 */
export declare class TestCaseApi extends BaseAPI {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestCaseApi
     */
    duplicateOperationId(options?: any): Promise<import("axios").AxiosResponse<void>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestCaseApi
     */
    duplicateOperationId1(options?: any): Promise<import("axios").AxiosResponse<void>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestCaseApi
     */
    duplicateOperationId2(options?: any): Promise<import("axios").AxiosResponse<void>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestCaseApi
     */
    duplicateOperationId3(options?: any): Promise<import("axios").AxiosResponse<void>>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestCaseApi
     */
    getTestCasesNoOperationId(options?: any): Promise<import("axios").AxiosResponse<void>>;
    /**
     *
     * @param {string} duplicateParam
     * @param {string} duplicateParam2
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestCaseApi
     */
    testCaseGetDuplicateParameters(duplicateParam: string, duplicateParam2: string, options?: any): Promise<import("axios").AxiosResponse<void>>;
    /**
     *
     * @param {string} requiredPathItemQueryParam
     * @param {string} requiredPathItemPathParam
     * @param {string} requiredQueryParam
     * @param {string} [optionalQueryParam]
     * @param {string} [optionalPathItemQueryParam] Overrides original path item query parameter.
     * @param {SimpleTestEntity} [simpleTestEntity]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestCaseApi
     */
    testCaseGetRequiredParameters(requiredPathItemQueryParam: string, requiredPathItemPathParam: string, requiredQueryParam: string, optionalQueryParam?: string, optionalPathItemQueryParam?: string, simpleTestEntity?: SimpleTestEntity, options?: any): Promise<import("axios").AxiosResponse<void>>;
    /**
     *
     * @param {string} requiredPathItemQueryParam
     * @param {string} requiredPathItemPathParam
     * @param {string} requiredQueryParam
     * @param {SimpleTestEntity} simpleTestEntity
     * @param {string} [optionalPathItemQueryParam]
     * @param {string} [optionalQueryParam]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestCaseApi
     */
    testCasePostRequiredParameters(requiredPathItemQueryParam: string, requiredPathItemPathParam: string, requiredQueryParam: string, simpleTestEntity: SimpleTestEntity, optionalPathItemQueryParam?: string, optionalQueryParam?: string, options?: any): Promise<import("axios").AxiosResponse<void>>;
}
//# sourceMappingURL=test-case-api.d.ts.map