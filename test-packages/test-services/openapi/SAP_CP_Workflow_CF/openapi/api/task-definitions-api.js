"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDefinitionsApi = exports.TaskDefinitionsApiFactory = exports.TaskDefinitionsApiFp = exports.TaskDefinitionsApiAxiosParamCreator = void 0;
var axios_1 = __importDefault(require("axios"));
// Some imports not used depending on template conditions
// @ts-ignore
var base_1 = require("../base");
/**
 * TaskDefinitionsApi - axios parameter creator
 * @export
 */
var TaskDefinitionsApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Retrieves task definitions by query parameters.   A task definition is identified by the ID of the respective activity within a workflow definition (for example, usertask1) and the workflow definition ID.  The workflow definition ID is version independent. That means, this API assumes that task definitions are semantically the same if they span several  workflow versions and therefore have the same identifier. The latest workflow definition version is expected to contain the leading property values of the task definition.  At the moment, filtering is limited to the $skip and $top parameters for paging through the available task definitions.  The returned task definitions are sorted in descending order of their creation time.  Roles permitted to execute this operation:   - Global roles: WorkflowViewer, WorkflowAdmin
         * @summary Retrieve definitions by query parameters
         * @param {number} [$skip] The number of records you want to skip from the beginning. You can skip at most 4000 records. To indicate a result range that starts, for example, at 1001, combine the $skip with the $top parameter. If not specified, no records are skipped. You can use this parameter only once. Refer also to the $top parameter.
         * @param {number} [$top] The number of records you want to show. You can get at most 1000 records per API call. To indicate a result range that starts, for example, at 1001, combine the $top with the $skip parameter. If not specified, 100 records are returned. You can use this parameter only once. Refer also to the $skip parameter.
         * @param {'allpages' | 'none'} [$inlinecount] Specify whether the total count of the task definitions should be returned as a value of the X-Total-Count response header. To enable the header, use the \&#39;allpages\&#39; setting. To disable the header, use the \&#39;none\&#39; setting. The values are case-sensitive. You can use this parameter only once.
         * @param {'attributeDefinitions'} [$expand] You can request custom task attributes to become part of the task output by specifying the value \&#39;attributeDefinitions\&#39; for the \&#39;$expand\&#39; parameter. Otherwise, if the \&#39;$expand\&#39; parameter is not specified, the \&#39;attributeDefinitions\&#39; field is not included into the output. Note that labels as well as the order of the custom task attributes in which they are returned, are taken from the latest versions of the workflow definitions where the corresponding task definition exists.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1TaskDefinitionsGet: function ($skip, $top, $inlinecount, $expand, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, _a, localVarAccessTokenValue, _b, query, key, key, headersFromBaseOptions;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            localVarPath = "/v1/task-definitions";
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.accessToken)) return [3 /*break*/, 5];
                            if (!(typeof configuration.accessToken === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.accessToken("Oauth2_AuthorizationCode", [])];
                        case 1:
                            _a = _c.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.accessToken];
                        case 3:
                            _a = _c.sent();
                            _c.label = 4;
                        case 4:
                            localVarAccessTokenValue = _a;
                            localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
                            _c.label = 5;
                        case 5:
                            if (!(configuration && configuration.accessToken)) return [3 /*break*/, 10];
                            if (!(typeof configuration.accessToken === 'function')) return [3 /*break*/, 7];
                            return [4 /*yield*/, configuration.accessToken("Oauth2_ClientCredentials", [])];
                        case 6:
                            _b = _c.sent();
                            return [3 /*break*/, 9];
                        case 7: return [4 /*yield*/, configuration.accessToken];
                        case 8:
                            _b = _c.sent();
                            _c.label = 9;
                        case 9:
                            localVarAccessTokenValue = _b;
                            localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
                            _c.label = 10;
                        case 10:
                            if ($skip !== undefined) {
                                localVarQueryParameter['$skip'] = $skip;
                            }
                            if ($top !== undefined) {
                                localVarQueryParameter['$top'] = $top;
                            }
                            if ($inlinecount !== undefined) {
                                localVarQueryParameter['$inlinecount'] = $inlinecount;
                            }
                            if ($expand !== undefined) {
                                localVarQueryParameter['$expand'] = $expand;
                            }
                            query = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                query.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.query) {
                                query.set(key, options.query[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(query)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
    };
};
exports.TaskDefinitionsApiAxiosParamCreator = TaskDefinitionsApiAxiosParamCreator;
/**
 * TaskDefinitionsApi - functional programming interface
 * @export
 */
var TaskDefinitionsApiFp = function (configuration) {
    return {
        /**
         * Retrieves task definitions by query parameters.   A task definition is identified by the ID of the respective activity within a workflow definition (for example, usertask1) and the workflow definition ID.  The workflow definition ID is version independent. That means, this API assumes that task definitions are semantically the same if they span several  workflow versions and therefore have the same identifier. The latest workflow definition version is expected to contain the leading property values of the task definition.  At the moment, filtering is limited to the $skip and $top parameters for paging through the available task definitions.  The returned task definitions are sorted in descending order of their creation time.  Roles permitted to execute this operation:   - Global roles: WorkflowViewer, WorkflowAdmin
         * @summary Retrieve definitions by query parameters
         * @param {number} [$skip] The number of records you want to skip from the beginning. You can skip at most 4000 records. To indicate a result range that starts, for example, at 1001, combine the $skip with the $top parameter. If not specified, no records are skipped. You can use this parameter only once. Refer also to the $top parameter.
         * @param {number} [$top] The number of records you want to show. You can get at most 1000 records per API call. To indicate a result range that starts, for example, at 1001, combine the $top with the $skip parameter. If not specified, 100 records are returned. You can use this parameter only once. Refer also to the $skip parameter.
         * @param {'allpages' | 'none'} [$inlinecount] Specify whether the total count of the task definitions should be returned as a value of the X-Total-Count response header. To enable the header, use the \&#39;allpages\&#39; setting. To disable the header, use the \&#39;none\&#39; setting. The values are case-sensitive. You can use this parameter only once.
         * @param {'attributeDefinitions'} [$expand] You can request custom task attributes to become part of the task output by specifying the value \&#39;attributeDefinitions\&#39; for the \&#39;$expand\&#39; parameter. Otherwise, if the \&#39;$expand\&#39; parameter is not specified, the \&#39;attributeDefinitions\&#39; field is not included into the output. Note that labels as well as the order of the custom task attributes in which they are returned, are taken from the latest versions of the workflow definitions where the corresponding task definition exists.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1TaskDefinitionsGet: function ($skip, $top, $inlinecount, $expand, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.TaskDefinitionsApiAxiosParamCreator(configuration).v1TaskDefinitionsGet($skip, $top, $inlinecount, $expand, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
    };
};
exports.TaskDefinitionsApiFp = TaskDefinitionsApiFp;
/**
 * TaskDefinitionsApi - factory interface
 * @export
 */
var TaskDefinitionsApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Retrieves task definitions by query parameters.   A task definition is identified by the ID of the respective activity within a workflow definition (for example, usertask1) and the workflow definition ID.  The workflow definition ID is version independent. That means, this API assumes that task definitions are semantically the same if they span several  workflow versions and therefore have the same identifier. The latest workflow definition version is expected to contain the leading property values of the task definition.  At the moment, filtering is limited to the $skip and $top parameters for paging through the available task definitions.  The returned task definitions are sorted in descending order of their creation time.  Roles permitted to execute this operation:   - Global roles: WorkflowViewer, WorkflowAdmin
         * @summary Retrieve definitions by query parameters
         * @param {number} [$skip] The number of records you want to skip from the beginning. You can skip at most 4000 records. To indicate a result range that starts, for example, at 1001, combine the $skip with the $top parameter. If not specified, no records are skipped. You can use this parameter only once. Refer also to the $top parameter.
         * @param {number} [$top] The number of records you want to show. You can get at most 1000 records per API call. To indicate a result range that starts, for example, at 1001, combine the $top with the $skip parameter. If not specified, 100 records are returned. You can use this parameter only once. Refer also to the $skip parameter.
         * @param {'allpages' | 'none'} [$inlinecount] Specify whether the total count of the task definitions should be returned as a value of the X-Total-Count response header. To enable the header, use the \&#39;allpages\&#39; setting. To disable the header, use the \&#39;none\&#39; setting. The values are case-sensitive. You can use this parameter only once.
         * @param {'attributeDefinitions'} [$expand] You can request custom task attributes to become part of the task output by specifying the value \&#39;attributeDefinitions\&#39; for the \&#39;$expand\&#39; parameter. Otherwise, if the \&#39;$expand\&#39; parameter is not specified, the \&#39;attributeDefinitions\&#39; field is not included into the output. Note that labels as well as the order of the custom task attributes in which they are returned, are taken from the latest versions of the workflow definitions where the corresponding task definition exists.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1TaskDefinitionsGet: function ($skip, $top, $inlinecount, $expand, options) {
            return exports.TaskDefinitionsApiFp(configuration).v1TaskDefinitionsGet($skip, $top, $inlinecount, $expand, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
exports.TaskDefinitionsApiFactory = TaskDefinitionsApiFactory;
/**
 * TaskDefinitionsApi - object-oriented interface
 * @export
 * @class TaskDefinitionsApi
 * @extends {BaseAPI}
 */
var TaskDefinitionsApi = /** @class */ (function (_super) {
    __extends(TaskDefinitionsApi, _super);
    function TaskDefinitionsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves task definitions by query parameters.   A task definition is identified by the ID of the respective activity within a workflow definition (for example, usertask1) and the workflow definition ID.  The workflow definition ID is version independent. That means, this API assumes that task definitions are semantically the same if they span several  workflow versions and therefore have the same identifier. The latest workflow definition version is expected to contain the leading property values of the task definition.  At the moment, filtering is limited to the $skip and $top parameters for paging through the available task definitions.  The returned task definitions are sorted in descending order of their creation time.  Roles permitted to execute this operation:   - Global roles: WorkflowViewer, WorkflowAdmin
     * @summary Retrieve definitions by query parameters
     * @param {number} [$skip] The number of records you want to skip from the beginning. You can skip at most 4000 records. To indicate a result range that starts, for example, at 1001, combine the $skip with the $top parameter. If not specified, no records are skipped. You can use this parameter only once. Refer also to the $top parameter.
     * @param {number} [$top] The number of records you want to show. You can get at most 1000 records per API call. To indicate a result range that starts, for example, at 1001, combine the $top with the $skip parameter. If not specified, 100 records are returned. You can use this parameter only once. Refer also to the $skip parameter.
     * @param {'allpages' | 'none'} [$inlinecount] Specify whether the total count of the task definitions should be returned as a value of the X-Total-Count response header. To enable the header, use the \&#39;allpages\&#39; setting. To disable the header, use the \&#39;none\&#39; setting. The values are case-sensitive. You can use this parameter only once.
     * @param {'attributeDefinitions'} [$expand] You can request custom task attributes to become part of the task output by specifying the value \&#39;attributeDefinitions\&#39; for the \&#39;$expand\&#39; parameter. Otherwise, if the \&#39;$expand\&#39; parameter is not specified, the \&#39;attributeDefinitions\&#39; field is not included into the output. Note that labels as well as the order of the custom task attributes in which they are returned, are taken from the latest versions of the workflow definitions where the corresponding task definition exists.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskDefinitionsApi
     */
    TaskDefinitionsApi.prototype.v1TaskDefinitionsGet = function ($skip, $top, $inlinecount, $expand, options) {
        var _this = this;
        return exports.TaskDefinitionsApiFp(this.configuration).v1TaskDefinitionsGet($skip, $top, $inlinecount, $expand, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return TaskDefinitionsApi;
}(base_1.BaseAPI));
exports.TaskDefinitionsApi = TaskDefinitionsApi;
//# sourceMappingURL=task-definitions-api.js.map