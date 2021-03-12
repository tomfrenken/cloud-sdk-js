/* eslint-disable max-classes-per-file */
import { AxiosResponse } from 'axios';
import { Destination, DestinationNameAndJwt } from '../connectivity/scp-cf';
import {
  buildAxiosRequestConfig,
  executeHttpRequest,
  HttpResponse,
  Method
} from '../http-client';
import type {
  ConstructorType,
  FunctionReturnType,
  ParametersType,
  UnwrapAxiosResponse
} from './types';

/**
 * @experimental This API is experimental and might change in newer versions. Use with caution.
 * Generic request builder for building and executing requests based on apis generated by the OpenAPI generator.
 * @typeparam ApiT Interface of the generated api. All properties of the interface will be treated as functions.
 * @typeparam FnT Literal string type of the function name, must be a key of `ApiT` and represent a function.
 */
export class OpenApiRequestBuilderOld<ApiT, FnT extends keyof ApiT> {
  private customHeaders: Record<string, string> = {};
  private args: ParametersType<ApiT, FnT>;

  /**
   * Create an instance of `RestRequestBuilder`.
   * @param apiConstructor Constructor of the underlying OpenApi api definition.
   * @param fn Name of the function represented in thie request builder.
   * @param args Arguments to pass to the api function.
   */
  constructor(
    private apiConstructor: ConstructorType<ApiT>,
    public fn: FnT,
    ...args: ParametersType<ApiT, FnT>
  ) {
    this.args = args;
  }

  /**
   * Add custom headers to the request. If a header field with the given name already exists it is overwritten.
   *
   * @param headers Key-value pairs denoting additional custom headers
   * @returns The request builder itself, to facilitate method chaining
   */
  addCustomHeaders(headers: Record<string, string>): this {
    Object.entries(headers).forEach(([key, value]) => {
      this.customHeaders[key.toLowerCase()] = value;
    });
    return this;
  }

  /**
   * Execute request and get a raw AxiosResponse, including all information about the HTTP response.
   * This especially comes in handy, when you need to access the headers or status code of the response.
   * @param destination Destination to execute the request against.
   * @param options Options to employ when fetching destinations.
   * @returns A promise resolving to an AxiosResponse.
   */
  async executeRaw(
    destination: Destination | DestinationNameAndJwt
  ): Promise<FunctionReturnType<ApiT, FnT>> {
    const requestConfig = await buildAxiosRequestConfig(destination, {
      headers: this.customHeaders
    });

    const api = new this.apiConstructor(
      { baseOptions: requestConfig },
      requestConfig.baseURL
    );
    const fn = api[this.fn];

    if (typeof fn === 'function') {
      return fn.apply(api, this.args);
    }

    throw new Error(
      `Could not execute request. '${this.fn}' is not a function of ${this.apiConstructor.name}.`
    );
  }

  /**
   * Execute request and get the response data. Use this to conveniently access the data of a service without technical information about the response.
   * @param destination Destination to execute the request against.
   * @param options Options to employ when fetching destinations.
   * @returns A promise resolving to the requested return type.
   */
  async execute(
    destination: Destination | DestinationNameAndJwt
  ): Promise<UnwrapAxiosResponse<FunctionReturnType<ApiT, FnT>>> {
    const response = await this.executeRaw(destination);
    if (isAxiosResponse(response)) {
      return response.data;
    }
    throw new Error(
      'Could not access response data. Response was not an axios response.'
    );
  }
}

/**
 * @experimental This API is experimental and might change in newer versions. Use with caution.
 * Generic request builder for building and executing requests based on apis generated by the OpenAPI generator.
 * @typeparam ApiT Interface of the generated api. All properties of the interface will be treated as functions.
 * @typeparam FnT Literal string type of the function name, must be a key of `ApiT` and represent a function.
 */
export class OpenApiRequestBuilder {
  private static isPlaceholder(pathPart: string): boolean {
    return /^\{.+\}$/.test(pathPart);
  }

  private customHeaders: Record<string, string> = {};

  /**
   * Create an instance of `RestRequestBuilder`.
   * @param apiConstructor Constructor of the underlying OpenApi api definition.
   * @param fn Name of the function represented in thie request builder.
   * @param args Arguments to pass to the api function.
   */
  constructor(
    public method: Method,
    private pathPattern: string,
    private parameters?: OpenApiRequestParameters
  ) {}

  /**
   * Add custom headers to the request. If a header field with the given name already exists it is overwritten.
   *
   * @param headers Key-value pairs denoting additional custom headers
   * @returns The request builder itself, to facilitate method chaining
   */
  addCustomHeaders(headers: Record<string, string>): this {
    Object.entries(headers).forEach(([key, value]) => {
      this.customHeaders[key.toLowerCase()] = value;
    });
    return this;
  }

  /**
   * Execute request and get a raw AxiosResponse, including all information about the HTTP response.
   * This especially comes in handy, when you need to access the headers or status code of the response.
   * @param destination Destination to execute the request against.
   * @param options Options to employ when fetching destinations.
   * @returns A promise resolving to an AxiosResponse.
   */
  async executeRaw(
    destination: Destination | DestinationNameAndJwt
  ): Promise<HttpResponse> {
    return executeHttpRequest(destination, {
      method: this.method,
      url: this.getPath(),
      headers: this.customHeaders,
      params: this.parameters?.queryParameters,
      data: this.parameters?.body
    });
  }

  /**
   * Execute request and get the response data. Use this to conveniently access the data of a service without technical information about the response.
   * @param destination Destination to execute the request against.
   * @param options Options to employ when fetching destinations.
   * @returns A promise resolving to the requested return type.
   */
  async execute(
    destination: Destination | DestinationNameAndJwt
  ): Promise<any> {
    // TODO: fix return type
    const response = await this.executeRaw(destination);
    if (isAxiosResponse(response)) {
      return response.data;
    }
    throw new Error(
      'Could not access response data. Response was not an axios response.'
    );
  }

  private getPath(): string {
    const pathParameters = (
      this.parameters?.pathParameters || []
    ).map(pathParameter => encodeURIComponent(pathParameter));
    const pathParts = this.pathPattern.split('/');
    const placeholders = pathParts.filter(part =>
      OpenApiRequestBuilder.isPlaceholder(part)
    );
    if (placeholders.length !== pathParameters.length) {
      // TODO: Improve error
      throw new Error(
        `Could not build path with path with path parameters. Expected number of parameters was ${placeholders.length}, but got ${pathParameters.length}.`
      );
    }
    return pathParts
      .map(part =>
        OpenApiRequestBuilder.isPlaceholder(part)
          ? pathParameters.shift()
          : part
      )
      .join('/');
  }
}

// TODO: Tighten types
interface OpenApiRequestParameters {
  pathParameters?: string[];
  queryParameters?: Record<string, any>;
  body?: any;
}

function isAxiosResponse(val: any): val is AxiosResponse {
  return 'data' in val;
}
