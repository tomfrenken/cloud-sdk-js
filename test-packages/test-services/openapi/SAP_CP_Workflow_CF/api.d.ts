import { OpenApiRequestBuilder } from '@sap-cloud-sdk/core';
import { SendMessagePayload } from './openapi/model';
export declare const SAPCPWorkflowCFApi: {
    undefined: (args: {
        body: SendMessagePayload;
    }) => OpenApiRequestBuilder<any, "undefined">;
    getInstance: (args: {
        workflowInstanceId: string;
        expand?: 'attributes';
    }) => OpenApiRequestBuilder<any, "getInstance">;
};
//# sourceMappingURL=api.d.ts.map