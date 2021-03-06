/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/core';
import { TestEntity } from './openapi/model';

export const SwaggerYamlServiceDefaultApi = {
  postEntity: (pathParam: string, queryParameters?: {'queryParam'?: string}) => new OpenApiRequestBuilder(
    'post',
    '/entities/{pathParam}',
    {
          pathParameters: [pathParam],
          queryParameters
        }
  ),
  patchEntity: (pathParam: string, body: TestEntity, queryParameters?: {}) => new OpenApiRequestBuilder(
    'patch',
    '/entities/{pathParam}',
    {
          pathParameters: [pathParam],
          body
        }
  )
};
