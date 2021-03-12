"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestServiceTestCaseApi = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
exports.TestServiceTestCaseApi = {
    testCaseGetRequiredParameters: function (requiredPathItemPathParam, body, queryParameters) { return new core_1.OpenApiRequestBuilder('get', '/test-cases/parameters/required-parameters/{requiredPathItemPathParam}', {
        pathParameters: [requiredPathItemPathParam],
        body: body,
        queryParameters: queryParameters
    }); },
    testCasePostRequiredParameters: function (requiredPathItemPathParam, body, queryParameters) { return new core_1.OpenApiRequestBuilder('post', '/test-cases/parameters/required-parameters/{requiredPathItemPathParam}', {
        pathParameters: [requiredPathItemPathParam],
        body: body,
        queryParameters: queryParameters
    }); },
    testCaseGetDuplicateParameters: function (duplicateParam, queryParameters) { return new core_1.OpenApiRequestBuilder('get', '/test-cases/parameters/{duplicateParam}', {
        pathParameters: [duplicateParam],
        queryParameters: queryParameters
    }); },
    getTestCasesNoOperationId: function (queryParameters) { return new core_1.OpenApiRequestBuilder('get', '/test-cases/no-operation-id'); },
    duplicateOperationId: function (queryParameters) { return new core_1.OpenApiRequestBuilder('get', '/test-cases/duplicate-operation-ids'); },
    duplicateOperationId2: function (queryParameters) { return new core_1.OpenApiRequestBuilder('put', '/test-cases/duplicate-operation-ids'); },
    duplicateOperationId3: function (queryParameters) { return new core_1.OpenApiRequestBuilder('post', '/test-cases/duplicate-operation-ids'); },
    duplicateOperationId1: function (queryParameters) { return new core_1.OpenApiRequestBuilder('patch', '/test-cases/duplicate-operation-ids'); },
    complexSchemas: function (body, queryParameters) { return new core_1.OpenApiRequestBuilder('get', '/test-cases/complex-schemas', {
        body: body
    }); }
};
//# sourceMappingURL=test-case-api.js.map