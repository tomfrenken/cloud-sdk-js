"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestServiceDefaultApi = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
exports.TestServiceDefaultApi = {
    noTag: function (queryParameters) { return new core_1.OpenApiRequestBuilder('get', '/test-cases/default-tag'); },
    defaultTag: function (queryParameters) { return new core_1.OpenApiRequestBuilder('post', '/test-cases/default-tag'); }
};
//# sourceMappingURL=default-api.js.map