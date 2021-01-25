"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAPCPWorkflowCFApi = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var api_1 = require("./openapi/api");
exports.SAPCPWorkflowCFApi = {
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args === null || args === void 0 ? void 0 : args.skip, args === null || args === void 0 ? void 0 : args.top, args === null || args === void 0 ? void 0 : args.inlinecount, args === null || args === void 0 ? void 0 : args.expand, args === null || args === void 0 ? void 0 : args.orderby, args === null || args === void 0 ? void 0 : args.workflowInstanceId, args === null || args === void 0 ? void 0 : args.workflowDefinitionId, args === null || args === void 0 ? void 0 : args.processor, args === null || args === void 0 ? void 0 : args.id, args === null || args === void 0 ? void 0 : args.activityId, args === null || args === void 0 ? void 0 : args.description, args === null || args === void 0 ? void 0 : args.subject, args === null || args === void 0 ? void 0 : args.createdAt, args === null || args === void 0 ? void 0 : args.createdFrom, args === null || args === void 0 ? void 0 : args.createdUpTo, args === null || args === void 0 ? void 0 : args.claimedAt, args === null || args === void 0 ? void 0 : args.claimedFrom, args === null || args === void 0 ? void 0 : args.claimedUpTo, args === null || args === void 0 ? void 0 : args.completedAt, args === null || args === void 0 ? void 0 : args.completedFrom, args === null || args === void 0 ? void 0 : args.completedUpTo, args === null || args === void 0 ? void 0 : args.lastChangedAt, args === null || args === void 0 ? void 0 : args.lastChangedFrom, args === null || args === void 0 ? void 0 : args.lastChangedUpTo, args === null || args === void 0 ? void 0 : args.dueDate, args === null || args === void 0 ? void 0 : args.dueDateFrom, args === null || args === void 0 ? void 0 : args.dueDateUpTo, args === null || args === void 0 ? void 0 : args.priority, args === null || args === void 0 ? void 0 : args.status, args === null || args === void 0 ? void 0 : args.recipientUsers, args === null || args === void 0 ? void 0 : args.recipientGroups, args === null || args === void 0 ? void 0 : args.containsText, args === null || args === void 0 ? void 0 : args.attributesExampleCustomAttribute, args === null || args === void 0 ? void 0 : args.definitionId); },
    getInstance: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'getInstance', args.taskInstanceId, args.expand); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.taskInstanceId, args.body); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.taskInstanceId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.taskInstanceId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.taskInstanceId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.taskInstanceId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.taskInstanceId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args === null || args === void 0 ? void 0 : args.skip, args === null || args === void 0 ? void 0 : args.top, args === null || args === void 0 ? void 0 : args.inlinecount, args === null || args === void 0 ? void 0 : args.expand); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args === null || args === void 0 ? void 0 : args.orderby, args === null || args === void 0 ? void 0 : args.skip, args === null || args === void 0 ? void 0 : args.top, args === null || args === void 0 ? void 0 : args.inlinecount); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.definitionId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.definitionId, args.cascade); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.definitionId, args.orderby, args.skip, args.top, args.inlinecount); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.definitionId, args.versionNumber); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.definitionId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.definitionId, args.versionNumber); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.definitionId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.definitionId, args.versionNumber); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args === null || args === void 0 ? void 0 : args.orderby, args === null || args === void 0 ? void 0 : args.skip, args === null || args === void 0 ? void 0 : args.top, args === null || args === void 0 ? void 0 : args.inlinecount, args === null || args === void 0 ? void 0 : args.expand, args === null || args === void 0 ? void 0 : args.id, args === null || args === void 0 ? void 0 : args.definitionId, args === null || args === void 0 ? void 0 : args.definitionVersion, args === null || args === void 0 ? void 0 : args.status, args === null || args === void 0 ? void 0 : args.startedAt, args === null || args === void 0 ? void 0 : args.startedFrom, args === null || args === void 0 ? void 0 : args.startedUpTo, args === null || args === void 0 ? void 0 : args.completedAt, args === null || args === void 0 ? void 0 : args.completedFrom, args === null || args === void 0 ? void 0 : args.completedUpTo, args === null || args === void 0 ? void 0 : args.startedBy, args === null || args === void 0 ? void 0 : args.subject, args === null || args === void 0 ? void 0 : args.containsText, args === null || args === void 0 ? void 0 : args.businessKey, args === null || args === void 0 ? void 0 : args.rootInstanceId, args === null || args === void 0 ? void 0 : args.parentInstanceId, args === null || args === void 0 ? void 0 : args.attributesExampleCustomAttribute); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.body); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.body); },
    getInstance: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'getInstance', args.workflowInstanceId, args.expand); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.workflowInstanceId, args.body); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.workflowInstanceId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.workflowInstanceId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.workflowInstanceId, args.body); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.workflowInstanceId, args.body); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.workflowInstanceId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.workflowInstanceId, args.body); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.workflowInstanceId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.workflowInstanceId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.workflowInstanceId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.workflowInstanceId, args.body); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args === null || args === void 0 ? void 0 : args.skip, args === null || args === void 0 ? void 0 : args.top, args === null || args === void 0 ? void 0 : args.inlinecount, args === null || args === void 0 ? void 0 : args.type); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.formId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.formId, args.revisionId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.formId, args.versionNumber); },
    undefined: function () { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined'); },
    undefined: function () { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined'); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.jobId); },
    undefined: function (args) { return new core_1.OpenApiRequestBuilder(api_1.DefaultApi, 'undefined', args.body); }
};
//# sourceMappingURL=api.js.map