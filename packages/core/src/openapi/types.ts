import { AxiosResponse } from 'axios';

/**
 * Type of the parameters of a given function
 *
 * @typeparam ApiT Interface of the api.
 * @typeparam FnT Name of the function, that is part of the api.
 */
export type ParametersType<ApiT, FnT extends keyof ApiT> = ApiT[FnT] extends (
  ...args: any
) => any
  ? Parameters<ApiT[FnT]>
  : never;

/**
 * Unwrap return type of the given function type `ApiT[FnT]`.
 * E. g. for `someFunction() => AxiosResponse<SomeReturnType>` this gives you `SomeReturnType`.
 * It is `never` when the given type is not a function type
 *
 * @typeparam ApiT Interface of the api.
 * @typeparam FnT Name of the function, that is part of the api.
 */
export type FunctionReturnType<
  ApiT,
  FnT extends keyof ApiT
> = ApiT[FnT] extends (...args: any) => any
  ? UnPromisify<ReturnType<ApiT[FnT]>>
  : never;

/**
 * Unwrap the Axios response type.
 */
export type UnwrapAxiosResponse<T> = T extends AxiosResponse<infer U> ? U : T;

/**
 * Get the type of the promised response, e. g. for `Promise<SomeType>` this gives you `SomeType`.
 *
 * @typeparam T Type of the promised content.
 */
export type UnPromisify<T> = T extends Promise<infer U> ? U : T;

/**
 * The type of a constructor.
 *
 * @typeparam T Type of an instance created by the constructor.
 */
export type ConstructorType<T> = new (...args: any[]) => T;

/**
 * A type to represent to disallow a given type (DisallowedT).
 * @typeparam T Type to test against the disallowed type.
 * @typeparam DisallowedT The disallowed type.
 */
export type Except<T, DisallowedT> = T extends DisallowedT ? never : T;
