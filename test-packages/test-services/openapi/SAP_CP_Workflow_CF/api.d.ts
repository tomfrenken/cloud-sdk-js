import { OpenApiRequestBuilder } from '@sap-cloud-sdk/core';
import { UpdateTaskInstancePayload, WorkflowInstanceStartPayload, WorkflowInstancesUpdatePayload, WorkflowInstanceUpdatePayload, AttachmentsContext, WorkflowInstanceRolesUpdatePayload, SendMessagePayload } from './openapi/model';
export declare const SAPCPWorkflowCFApi: {
    getV1TaskInstances: (args?: {
        skip?: number | undefined;
        top?: number | undefined;
        inlinecount?: "none" | "allpages" | undefined;
        expand?: "attributes" | undefined;
        orderby?: "claimedAt asc" | "claimedAt desc" | "completedAt asc" | "completedAt desc" | "createdAt asc" | "createdAt desc" | "lastChangedAt asc" | "lastChangedAt desc" | "dueDate asc" | "dueDate desc" | "subject asc" | "subject desc" | "description asc" | "description desc" | "activityId asc" | "activityId desc" | "id asc" | "id desc" | "processor asc" | "processor desc" | "workflowDefinitionId asc" | "workflowDefinitionId desc" | "workflowInstanceId asc" | "workflowInstanceId desc" | "priority asc" | "priority desc" | undefined;
        workflowInstanceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        processor?: string | undefined;
        id?: string | undefined;
        activityId?: string | undefined;
        description?: string | undefined;
        subject?: string | undefined;
        createdAt?: string | undefined;
        createdFrom?: string | undefined;
        createdUpTo?: string | undefined;
        claimedAt?: string | undefined;
        claimedFrom?: string | undefined;
        claimedUpTo?: string | undefined;
        completedAt?: string | undefined;
        completedFrom?: string | undefined;
        completedUpTo?: string | undefined;
        lastChangedAt?: string | undefined;
        lastChangedFrom?: string | undefined;
        lastChangedUpTo?: string | undefined;
        dueDate?: string | undefined;
        dueDateFrom?: string | undefined;
        dueDateUpTo?: string | undefined;
        priority?: "LOW" | "MEDIUM" | "HIGH" | "VERY_HIGH" | undefined;
        status?: "READY" | "RESERVED" | "COMPLETED" | "CANCELED" | undefined;
        recipientUsers?: string | undefined;
        recipientGroups?: string | undefined;
        containsText?: string | undefined;
        attributesExampleCustomAttribute?: string | undefined;
        definitionId?: string | undefined;
    } | undefined) => OpenApiRequestBuilder<any, "getV1TaskInstances">;
    getV1TaskInstancesByTaskInstanceId: (args: {
        taskInstanceId: string;
        expand?: 'attributes';
    }) => OpenApiRequestBuilder<any, "getV1TaskInstancesByTaskInstanceId">;
    updateV1TaskInstancesByTaskInstanceId: (args: {
        taskInstanceId: string;
        body: UpdateTaskInstancePayload;
    }) => OpenApiRequestBuilder<any, "updateV1TaskInstancesByTaskInstanceId">;
    getV1TaskInstancesAttributesByTaskInstanceId: (args: {
        taskInstanceId: string;
    }) => OpenApiRequestBuilder<any, "getV1TaskInstancesAttributesByTaskInstanceId">;
    getV1TaskInstancesContextByTaskInstanceId: (args: {
        taskInstanceId: string;
    }) => OpenApiRequestBuilder<any, "getV1TaskInstancesContextByTaskInstanceId">;
    getV1TaskInstancesAttachmentsByTaskInstanceId: (args: {
        taskInstanceId: string;
    }) => OpenApiRequestBuilder<any, "getV1TaskInstancesAttachmentsByTaskInstanceId">;
    getV1TaskInstancesFormByTaskInstanceId: (args: {
        taskInstanceId: string;
    }) => OpenApiRequestBuilder<any, "getV1TaskInstancesFormByTaskInstanceId">;
    getV1TaskInstancesFormModelByTaskInstanceId: (args: {
        taskInstanceId: string;
    }) => OpenApiRequestBuilder<any, "getV1TaskInstancesFormModelByTaskInstanceId">;
    getV1TaskDefinitions: (args?: {
        skip?: number | undefined;
        top?: number | undefined;
        inlinecount?: "none" | "allpages" | undefined;
        expand?: "attributeDefinitions" | undefined;
    } | undefined) => OpenApiRequestBuilder<any, "getV1TaskDefinitions">;
    getV1WorkflowDefinitions: (args?: {
        orderby?: "createdAt asc" | "createdAt desc" | "id asc" | "id desc" | "id" | "createdAt" | "version" | "version asc" | "version desc" | "name" | "name asc" | "name desc" | "createdBy" | "createdBy asc" | "createdBy desc" | undefined;
        skip?: number | undefined;
        top?: number | undefined;
        inlinecount?: "none" | "allpages" | undefined;
    } | undefined) => OpenApiRequestBuilder<any, "getV1WorkflowDefinitions">;
    getV1WorkflowDefinitionsByDefinitionId: (args: {
        definitionId: string;
    }) => OpenApiRequestBuilder<any, "getV1WorkflowDefinitionsByDefinitionId">;
    deleteV1WorkflowDefinitionsByDefinitionId: (args: {
        definitionId: string;
        cascade?: boolean;
    }) => OpenApiRequestBuilder<any, "deleteV1WorkflowDefinitionsByDefinitionId">;
    getV1WorkflowDefinitionsVersionsByDefinitionId: (args: {
        definitionId: string;
        orderby?: 'id' | 'id asc' | 'id desc' | 'version' | 'version asc' | 'version desc' | 'name' | 'name asc' | 'name desc' | 'createdAt' | 'createdAt asc' | 'createdAt desc' | 'createdBy' | 'createdBy asc' | 'createdBy desc';
        skip?: number;
        top?: number;
        inlinecount?: 'allpages' | 'none';
    }) => OpenApiRequestBuilder<any, "getV1WorkflowDefinitionsVersionsByDefinitionId">;
    getV1WorkflowDefinitionsVersionsByDefinitionIdAndVersionNumber: (args: {
        definitionId: string;
        versionNumber: string;
    }) => OpenApiRequestBuilder<any, "getV1WorkflowDefinitionsVersionsByDefinitionIdAndVersionNumber">;
    getV1WorkflowDefinitionsModelByDefinitionId: (args: {
        definitionId: string;
    }) => OpenApiRequestBuilder<any, "getV1WorkflowDefinitionsModelByDefinitionId">;
    getV1WorkflowDefinitionsVersionsModelByDefinitionIdAndVersionNumber: (args: {
        definitionId: string;
        versionNumber: string;
    }) => OpenApiRequestBuilder<any, "getV1WorkflowDefinitionsVersionsModelByDefinitionIdAndVersionNumber">;
    getV1WorkflowDefinitionsSampleContextsDefaultStartContextByDefinitionId: (args: {
        definitionId: string;
    }) => OpenApiRequestBuilder<any, "getV1WorkflowDefinitionsSampleContextsDefaultStartContextByDefinitionId">;
    getV1WorkflowDefinitionsVersionsSampleContextsDefaultStartContextByDefinitionIdAndVersionNumber: (args: {
        definitionId: string;
        versionNumber: string;
    }) => OpenApiRequestBuilder<any, "getV1WorkflowDefinitionsVersionsSampleContextsDefaultStartContextByDefinitionIdAndVersionNumber">;
    getV1WorkflowInstances: (args?: {
        orderby?: "completedAt asc" | "completedAt desc" | "subject asc" | "subject desc" | "id asc" | "id desc" | "definitionId asc" | "definitionId desc" | "definitionVersion asc" | "definitionVersion desc" | "startedAt asc" | "startedAt desc" | "startedBy asc" | "startedBy desc" | "businessKey asc" | "businessKey desc" | undefined;
        skip?: number | undefined;
        top?: number | undefined;
        inlinecount?: "none" | "allpages" | undefined;
        expand?: "attributes" | undefined;
        id?: string | undefined;
        definitionId?: string | undefined;
        definitionVersion?: string | undefined;
        status?: "COMPLETED" | "CANCELED" | "RUNNING" | "ERRONEOUS" | "SUSPENDED" | undefined;
        startedAt?: string | undefined;
        startedFrom?: string | undefined;
        startedUpTo?: string | undefined;
        completedAt?: string | undefined;
        completedFrom?: string | undefined;
        completedUpTo?: string | undefined;
        startedBy?: string | undefined;
        subject?: string | undefined;
        containsText?: string | undefined;
        businessKey?: string | undefined;
        rootInstanceId?: string | undefined;
        parentInstanceId?: string | undefined;
        attributesExampleCustomAttribute?: string | undefined;
    } | undefined) => OpenApiRequestBuilder<any, "getV1WorkflowInstances">;
    createV1WorkflowInstances: (args: {
        body: WorkflowInstanceStartPayload;
    }) => OpenApiRequestBuilder<any, "createV1WorkflowInstances">;
    updateV1WorkflowInstances: (args: {
        body: WorkflowInstancesUpdatePayload[];
    }) => OpenApiRequestBuilder<any, "updateV1WorkflowInstances">;
    getV1WorkflowInstancesByWorkflowInstanceId: (args: {
        workflowInstanceId: string;
        expand?: 'attributes';
    }) => OpenApiRequestBuilder<any, "getV1WorkflowInstancesByWorkflowInstanceId">;
    updateV1WorkflowInstancesByWorkflowInstanceId: (args: {
        workflowInstanceId: string;
        body: WorkflowInstanceUpdatePayload;
    }) => OpenApiRequestBuilder<any, "updateV1WorkflowInstancesByWorkflowInstanceId">;
    getV1WorkflowInstancesAttributesByWorkflowInstanceId: (args: {
        workflowInstanceId: string;
    }) => OpenApiRequestBuilder<any, "getV1WorkflowInstancesAttributesByWorkflowInstanceId">;
    getV1WorkflowInstancesContextByWorkflowInstanceId: (args: {
        workflowInstanceId: string;
    }) => OpenApiRequestBuilder<any, "getV1WorkflowInstancesContextByWorkflowInstanceId">;
    updateV1WorkflowInstancesContextByWorkflowInstanceId: (args: {
        workflowInstanceId: string;
        body: Record<string, any>;
    }) => OpenApiRequestBuilder<any, "updateV1WorkflowInstancesContextByWorkflowInstanceId">;
    updateV1WorkflowInstancesContextByWorkflowInstanceId1: (args: {
        workflowInstanceId: string;
        body: Record<string, any>;
    }) => OpenApiRequestBuilder<any, "updateV1WorkflowInstancesContextByWorkflowInstanceId1">;
    getV1WorkflowInstancesAttachmentsByWorkflowInstanceId: (args: {
        workflowInstanceId: string;
    }) => OpenApiRequestBuilder<any, "getV1WorkflowInstancesAttachmentsByWorkflowInstanceId">;
    updateV1WorkflowInstancesAttachmentsByWorkflowInstanceId: (args: {
        workflowInstanceId: string;
        body: AttachmentsContext;
    }) => OpenApiRequestBuilder<any, "updateV1WorkflowInstancesAttachmentsByWorkflowInstanceId">;
    getV1WorkflowInstancesErrorMessagesByWorkflowInstanceId: (args: {
        workflowInstanceId: string;
    }) => OpenApiRequestBuilder<any, "getV1WorkflowInstancesErrorMessagesByWorkflowInstanceId">;
    getV1WorkflowInstancesExecutionLogsByWorkflowInstanceId: (args: {
        workflowInstanceId: string;
    }) => OpenApiRequestBuilder<any, "getV1WorkflowInstancesExecutionLogsByWorkflowInstanceId">;
    getV1WorkflowInstancesRolesByWorkflowInstanceId: (args: {
        workflowInstanceId: string;
    }) => OpenApiRequestBuilder<any, "getV1WorkflowInstancesRolesByWorkflowInstanceId">;
    updateV1WorkflowInstancesRolesByWorkflowInstanceId: (args: {
        workflowInstanceId: string;
        body: WorkflowInstanceRolesUpdatePayload;
    }) => OpenApiRequestBuilder<any, "updateV1WorkflowInstancesRolesByWorkflowInstanceId">;
    getV1Forms: (args?: {
        skip?: number | undefined;
        top?: number | undefined;
        inlinecount?: "none" | "allpages" | undefined;
        type?: "start" | "task" | undefined;
    } | undefined) => OpenApiRequestBuilder<any, "getV1Forms">;
    deleteV1FormsByFormId: (args: {
        formId: string;
    }) => OpenApiRequestBuilder<any, "deleteV1FormsByFormId">;
    getV1FormsRevisionsModelByFormIdAndRevisionId: (args: {
        formId: string;
        revisionId: string;
    }) => OpenApiRequestBuilder<any, "getV1FormsRevisionsModelByFormIdAndRevisionId">;
    getV1FormsVersionsModelByFormIdAndVersionNumber: (args: {
        formId: string;
        versionNumber: string;
    }) => OpenApiRequestBuilder<any, "getV1FormsVersionsModelByFormIdAndVersionNumber">;
    getV1Export: () => OpenApiRequestBuilder<any, "getV1Export">;
    createV1Purge: () => OpenApiRequestBuilder<any, "createV1Purge">;
    getV1JobsByJobId: (args: {
        jobId: string;
    }) => OpenApiRequestBuilder<any, "getV1JobsByJobId">;
    createV1Messages: (args: {
        body: SendMessagePayload;
    }) => OpenApiRequestBuilder<any, "createV1Messages">;
};
//# sourceMappingURL=api.d.ts.map