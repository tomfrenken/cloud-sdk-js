/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/core';
import { DefaultApi } from './openapi/api';


export const SAPCPWorkflowCFMainApi = {
  queryDefinitions: ($orderby?: any, $skip?: any, $top?: any, $inlinecount?: any) => new OpenApiRequestBuilder<DefaultApi, 'queryDefinitions'>(
    DefaultApi,
    'queryDefinitions',
    $orderby,
    $skip,
    $top,
    $inlinecount
  ),
  getDefinition: (definitionId: any) => new OpenApiRequestBuilder<DefaultApi, 'getDefinition'>(
    DefaultApi,
    'getDefinition',
    definitionId
  ),
  undeployDefinition: (definitionId: any, cascade?: any) => new OpenApiRequestBuilder<DefaultApi, 'undeployDefinition'>(
    DefaultApi,
    'undeployDefinition',
    definitionId,
    cascade
  ),
  getDefinitionVersions: (definitionId: any, $orderby?: any, $skip?: any, $top?: any, $inlinecount?: any) => new OpenApiRequestBuilder<DefaultApi, 'getDefinitionVersions'>(
    DefaultApi,
    'getDefinitionVersions',
    definitionId,
    $orderby,
    $skip,
    $top,
    $inlinecount
  ),
  getDefinitionVersion: (definitionId: any, versionNumber: any) => new OpenApiRequestBuilder<DefaultApi, 'getDefinitionVersion'>(
    DefaultApi,
    'getDefinitionVersion',
    definitionId,
    versionNumber
  ),
  getModelForDefinition: (definitionId: any) => new OpenApiRequestBuilder<DefaultApi, 'getModelForDefinition'>(
    DefaultApi,
    'getModelForDefinition',
    definitionId
  ),
  getModelForDefinitionVersion: (definitionId: any, versionNumber: any) => new OpenApiRequestBuilder<DefaultApi, 'getModelForDefinitionVersion'>(
    DefaultApi,
    'getModelForDefinitionVersion',
    definitionId,
    versionNumber
  ),
  getDefaultSampleContext: (definitionId: any) => new OpenApiRequestBuilder<DefaultApi, 'getDefaultSampleContext'>(
    DefaultApi,
    'getDefaultSampleContext',
    definitionId
  ),
  getDefaultSampleContextForVersion: (definitionId: any, versionNumber: any) => new OpenApiRequestBuilder<DefaultApi, 'getDefaultSampleContextForVersion'>(
    DefaultApi,
    'getDefaultSampleContextForVersion',
    definitionId,
    versionNumber
  ),
  queryInstances: ($orderby?: any, $skip?: any, $top?: any, $inlinecount?: any, $expand?: any, id?: any, definitionId?: any, definitionVersion?: any, status?: any, startedAt?: any, startedFrom?: any, startedUpTo?: any, completedAt?: any, completedFrom?: any, completedUpTo?: any, startedBy?: any, subject?: any, containsText?: any, businessKey?: any, rootInstanceId?: any, parentInstanceId?: any, attributesExampleCustomAttribute?: any) => new OpenApiRequestBuilder<DefaultApi, 'queryInstances'>(
    DefaultApi,
    'queryInstances',
    $orderby,
    $skip,
    $top,
    $inlinecount,
    $expand,
    id,
    definitionId,
    definitionVersion,
    status,
    startedAt,
    startedFrom,
    startedUpTo,
    completedAt,
    completedFrom,
    completedUpTo,
    startedBy,
    subject,
    containsText,
    businessKey,
    rootInstanceId,
    parentInstanceId,
    attributesExampleCustomAttribute
  ),
  startInstance: (body: object) => new OpenApiRequestBuilder<DefaultApi, 'startInstance'>(
    DefaultApi,
    'startInstance',
    body
  ),
  updateInstances: (body: any[]) => new OpenApiRequestBuilder<DefaultApi, 'updateInstances'>(
    DefaultApi,
    'updateInstances',
    body
  ),
  getInstance: (workflowInstanceId: any, $expand?: any) => new OpenApiRequestBuilder<DefaultApi, 'getInstance'>(
    DefaultApi,
    'getInstance',
    workflowInstanceId,
    $expand
  ),
  updateInstance: (workflowInstanceId: any, body: object) => new OpenApiRequestBuilder<DefaultApi, 'updateInstance'>(
    DefaultApi,
    'updateInstance',
    workflowInstanceId,
    body
  ),
  getInstanceAttributes: (workflowInstanceId: any) => new OpenApiRequestBuilder<DefaultApi, 'getInstanceAttributes'>(
    DefaultApi,
    'getInstanceAttributes',
    workflowInstanceId
  ),
  getInstanceContext: (workflowInstanceId: any) => new OpenApiRequestBuilder<DefaultApi, 'getInstanceContext'>(
    DefaultApi,
    'getInstanceContext',
    workflowInstanceId
  ),
  setInstanceContext: (workflowInstanceId: any, body: object) => new OpenApiRequestBuilder<DefaultApi, 'setInstanceContext'>(
    DefaultApi,
    'setInstanceContext',
    workflowInstanceId,
    body
  ),
  updateInstanceContext: (workflowInstanceId: any, body: object) => new OpenApiRequestBuilder<DefaultApi, 'updateInstanceContext'>(
    DefaultApi,
    'updateInstanceContext',
    workflowInstanceId,
    body
  ),
  getInstanceAttachments: (workflowInstanceId: any) => new OpenApiRequestBuilder<DefaultApi, 'getInstanceAttachments'>(
    DefaultApi,
    'getInstanceAttachments',
    workflowInstanceId
  ),
  setInstanceAttachments: (workflowInstanceId: any, body: object) => new OpenApiRequestBuilder<DefaultApi, 'setInstanceAttachments'>(
    DefaultApi,
    'setInstanceAttachments',
    workflowInstanceId,
    body
  ),
  getInstanceErrorMessages: (workflowInstanceId: any) => new OpenApiRequestBuilder<DefaultApi, 'getInstanceErrorMessages'>(
    DefaultApi,
    'getInstanceErrorMessages',
    workflowInstanceId
  ),
  queryInstanceExecutionLogs: (workflowInstanceId: any) => new OpenApiRequestBuilder<DefaultApi, 'queryInstanceExecutionLogs'>(
    DefaultApi,
    'queryInstanceExecutionLogs',
    workflowInstanceId
  ),
  getInstanceRoles: (workflowInstanceId: any) => new OpenApiRequestBuilder<DefaultApi, 'getInstanceRoles'>(
    DefaultApi,
    'getInstanceRoles',
    workflowInstanceId
  ),
  updateInstanceRoles: (workflowInstanceId: any, body: object) => new OpenApiRequestBuilder<DefaultApi, 'updateInstanceRoles'>(
    DefaultApi,
    'updateInstanceRoles',
    workflowInstanceId,
    body
  ),
  getFormDefinitionsMetadata: ($skip?: any, $top?: any, $inlinecount?: any, type?: any) => new OpenApiRequestBuilder<DefaultApi, 'getFormDefinitionsMetadata'>(
    DefaultApi,
    'getFormDefinitionsMetadata',
    $skip,
    $top,
    $inlinecount,
    type
  ),
  undeployForm: (formId: any) => new OpenApiRequestBuilder<DefaultApi, 'undeployForm'>(
    DefaultApi,
    'undeployForm',
    formId
  ),
  getModelByIdAndRevision: (formId: any, revisionId: any) => new OpenApiRequestBuilder<DefaultApi, 'getModelByIdAndRevision'>(
    DefaultApi,
    'getModelByIdAndRevision',
    formId,
    revisionId
  ),
  getModelByIdAndVersion: (formId: any, versionNumber: any) => new OpenApiRequestBuilder<DefaultApi, 'getModelByIdAndVersion'>(
    DefaultApi,
    'getModelByIdAndVersion',
    formId,
    versionNumber
  ),
  purge: () => new OpenApiRequestBuilder<DefaultApi, 'purge'>(
    DefaultApi,
    'purge'
  ),
  getJob: (jobId: any) => new OpenApiRequestBuilder<DefaultApi, 'getJob'>(
    DefaultApi,
    'getJob',
    jobId
  ),
  sendMessage: (body: object) => new OpenApiRequestBuilder<DefaultApi, 'sendMessage'>(
    DefaultApi,
    'sendMessage',
    body
  )
};
