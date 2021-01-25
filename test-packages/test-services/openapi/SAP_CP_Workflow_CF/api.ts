/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/core';
import { DefaultApi } from './openapi/api';
import { UpdateTaskInstancePayload, WorkflowInstanceStartPayload, WorkflowInstancesUpdatePayload, WorkflowInstanceUpdatePayload, AttachmentsContext, WorkflowInstanceRolesUpdatePayload, SendMessagePayload } from './openapi/model';

export const SAPCPWorkflowCFApi = {
  undefined: (args?: {
    skip?: number,
    top?: number,
    inlinecount?: 'allpages' | 'none',
    expand?: 'attributes',
    orderby?: 'claimedAt asc' | 'claimedAt desc' | 'completedAt asc' | 'completedAt desc' | 'createdAt asc' | 'createdAt desc' | 'lastChangedAt asc' | 'lastChangedAt desc' | 'dueDate asc' | 'dueDate desc' | 'subject asc' | 'subject desc' | 'description asc' | 'description desc' | 'activityId asc' | 'activityId desc' | 'id asc' | 'id desc' | 'processor asc' | 'processor desc' | 'workflowDefinitionId asc' | 'workflowDefinitionId desc' | 'workflowInstanceId asc' | 'workflowInstanceId desc' | 'priority asc' | 'priority desc',
    workflowInstanceId?: string,
    workflowDefinitionId?: string,
    processor?: string,
    id?: string,
    activityId?: string,
    description?: string,
    subject?: string,
    createdAt?: string,
    createdFrom?: string,
    createdUpTo?: string,
    claimedAt?: string,
    claimedFrom?: string,
    claimedUpTo?: string,
    completedAt?: string,
    completedFrom?: string,
    completedUpTo?: string,
    lastChangedAt?: string,
    lastChangedFrom?: string,
    lastChangedUpTo?: string,
    dueDate?: string,
    dueDateFrom?: string,
    dueDateUpTo?: string,
    priority?: 'LOW' | 'MEDIUM' | 'HIGH' | 'VERY_HIGH',
    status?: 'READY' | 'RESERVED' | 'COMPLETED' | 'CANCELED',
    recipientUsers?: string,
    recipientGroups?: string,
    containsText?: string,
    attributesExampleCustomAttribute?: string,
    definitionId?: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args?.skip,
    args?.top,
    args?.inlinecount,
    args?.expand,
    args?.orderby,
    args?.workflowInstanceId,
    args?.workflowDefinitionId,
    args?.processor,
    args?.id,
    args?.activityId,
    args?.description,
    args?.subject,
    args?.createdAt,
    args?.createdFrom,
    args?.createdUpTo,
    args?.claimedAt,
    args?.claimedFrom,
    args?.claimedUpTo,
    args?.completedAt,
    args?.completedFrom,
    args?.completedUpTo,
    args?.lastChangedAt,
    args?.lastChangedFrom,
    args?.lastChangedUpTo,
    args?.dueDate,
    args?.dueDateFrom,
    args?.dueDateUpTo,
    args?.priority,
    args?.status,
    args?.recipientUsers,
    args?.recipientGroups,
    args?.containsText,
    args?.attributesExampleCustomAttribute,
    args?.definitionId
  ),
  getInstance: (args: {
    taskInstanceId: string,
    expand?: 'attributes'
  }) => new OpenApiRequestBuilder<DefaultApi, 'getInstance'>(
    DefaultApi,
    'getInstance',
    args.taskInstanceId,
    args.expand
  ),
  undefined: (args: {
    taskInstanceId: string,
    body: UpdateTaskInstancePayload
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.taskInstanceId,
    args.body
  ),
  undefined: (args: {
    taskInstanceId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.taskInstanceId
  ),
  undefined: (args: {
    taskInstanceId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.taskInstanceId
  ),
  undefined: (args: {
    taskInstanceId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.taskInstanceId
  ),
  undefined: (args: {
    taskInstanceId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.taskInstanceId
  ),
  undefined: (args: {
    taskInstanceId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.taskInstanceId
  ),
  undefined: (args?: {
    skip?: number,
    top?: number,
    inlinecount?: 'allpages' | 'none',
    expand?: 'attributeDefinitions'
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args?.skip,
    args?.top,
    args?.inlinecount,
    args?.expand
  ),
  undefined: (args?: {
    orderby?: 'id' | 'id asc' | 'id desc' | 'version' | 'version asc' | 'version desc' | 'name' | 'name asc' | 'name desc' | 'createdAt' | 'createdAt asc' | 'createdAt desc' | 'createdBy' | 'createdBy asc' | 'createdBy desc',
    skip?: number,
    top?: number,
    inlinecount?: 'allpages' | 'none'
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args?.orderby,
    args?.skip,
    args?.top,
    args?.inlinecount
  ),
  undefined: (args: {
    definitionId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.definitionId
  ),
  undefined: (args: {
    definitionId: string,
    cascade?: boolean
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.definitionId,
    args.cascade
  ),
  undefined: (args: {
    definitionId: string,
    orderby?: 'id' | 'id asc' | 'id desc' | 'version' | 'version asc' | 'version desc' | 'name' | 'name asc' | 'name desc' | 'createdAt' | 'createdAt asc' | 'createdAt desc' | 'createdBy' | 'createdBy asc' | 'createdBy desc',
    skip?: number,
    top?: number,
    inlinecount?: 'allpages' | 'none'
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.definitionId,
    args.orderby,
    args.skip,
    args.top,
    args.inlinecount
  ),
  undefined: (args: {
    definitionId: string,
    versionNumber: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.definitionId,
    args.versionNumber
  ),
  undefined: (args: {
    definitionId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.definitionId
  ),
  undefined: (args: {
    definitionId: string,
    versionNumber: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.definitionId,
    args.versionNumber
  ),
  undefined: (args: {
    definitionId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.definitionId
  ),
  undefined: (args: {
    definitionId: string,
    versionNumber: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.definitionId,
    args.versionNumber
  ),
  undefined: (args?: {
    orderby?: 'id asc' | 'id desc' | 'definitionId asc' | 'definitionId desc' | 'definitionVersion asc' | 'definitionVersion desc' | 'startedAt asc' | 'startedAt desc' | 'completedAt asc' | 'completedAt desc' | 'startedBy asc' | 'startedBy desc' | 'subject asc' | 'subject desc' | 'businessKey asc' | 'businessKey desc',
    skip?: number,
    top?: number,
    inlinecount?: 'allpages' | 'none',
    expand?: 'attributes',
    id?: string,
    definitionId?: string,
    definitionVersion?: string,
    status?: 'RUNNING' | 'ERRONEOUS' | 'SUSPENDED' | 'CANCELED' | 'COMPLETED',
    startedAt?: string,
    startedFrom?: string,
    startedUpTo?: string,
    completedAt?: string,
    completedFrom?: string,
    completedUpTo?: string,
    startedBy?: string,
    subject?: string,
    containsText?: string,
    businessKey?: string,
    rootInstanceId?: string,
    parentInstanceId?: string,
    attributesExampleCustomAttribute?: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args?.orderby,
    args?.skip,
    args?.top,
    args?.inlinecount,
    args?.expand,
    args?.id,
    args?.definitionId,
    args?.definitionVersion,
    args?.status,
    args?.startedAt,
    args?.startedFrom,
    args?.startedUpTo,
    args?.completedAt,
    args?.completedFrom,
    args?.completedUpTo,
    args?.startedBy,
    args?.subject,
    args?.containsText,
    args?.businessKey,
    args?.rootInstanceId,
    args?.parentInstanceId,
    args?.attributesExampleCustomAttribute
  ),
  undefined: (args: {
    body: WorkflowInstanceStartPayload
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.body
  ),
  undefined: (args: {
    body: WorkflowInstancesUpdatePayload[]
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.body
  ),
  getInstance: (args: {
    workflowInstanceId: string,
    expand?: 'attributes'
  }) => new OpenApiRequestBuilder<DefaultApi, 'getInstance'>(
    DefaultApi,
    'getInstance',
    args.workflowInstanceId,
    args.expand
  ),
  undefined: (args: {
    workflowInstanceId: string,
    body: WorkflowInstanceUpdatePayload
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.workflowInstanceId,
    args.body
  ),
  undefined: (args: {
    workflowInstanceId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.workflowInstanceId
  ),
  undefined: (args: {
    workflowInstanceId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.workflowInstanceId
  ),
  undefined: (args: {
    workflowInstanceId: string,
    body: Record<string, any>
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.workflowInstanceId,
    args.body
  ),
  undefined: (args: {
    workflowInstanceId: string,
    body: Record<string, any>
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.workflowInstanceId,
    args.body
  ),
  undefined: (args: {
    workflowInstanceId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.workflowInstanceId
  ),
  undefined: (args: {
    workflowInstanceId: string,
    body: AttachmentsContext
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.workflowInstanceId,
    args.body
  ),
  undefined: (args: {
    workflowInstanceId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.workflowInstanceId
  ),
  undefined: (args: {
    workflowInstanceId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.workflowInstanceId
  ),
  undefined: (args: {
    workflowInstanceId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.workflowInstanceId
  ),
  undefined: (args: {
    workflowInstanceId: string,
    body: WorkflowInstanceRolesUpdatePayload
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.workflowInstanceId,
    args.body
  ),
  undefined: (args?: {
    skip?: number,
    top?: number,
    inlinecount?: 'allpages' | 'none',
    type?: 'start' | 'task'
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args?.skip,
    args?.top,
    args?.inlinecount,
    args?.type
  ),
  undefined: (args: {
    formId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.formId
  ),
  undefined: (args: {
    formId: string,
    revisionId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.formId,
    args.revisionId
  ),
  undefined: (args: {
    formId: string,
    versionNumber: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.formId,
    args.versionNumber
  ),
  undefined: () => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined'
  ),
  undefined: () => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined'
  ),
  undefined: (args: {
    jobId: string
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.jobId
  ),
  undefined: (args: {
    body: SendMessagePayload
  }) => new OpenApiRequestBuilder<DefaultApi, 'undefined'>(
    DefaultApi,
    'undefined',
    args.body
  )
};
