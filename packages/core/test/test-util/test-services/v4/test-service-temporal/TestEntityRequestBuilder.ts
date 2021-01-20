/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  RequestBuilder,
  GetAllRequestBuilderV4,
  EntityV4, Constructable, DeSerializationMiddlewareInterface
} from '../../../../../src';
import { TestEntity as TestEntityTemporal, TestEntity } from './TestEntity';

/**
 * Request builder class for operations supported on the [[TestEntity]] entity.
 */
export class TestEntityRequestBuilder<T1 = string, T2 = number> extends RequestBuilder<TestEntity<T1, T2>> {
  constructor(public middleware?: DeSerializationMiddlewareInterface<T1, T2>) {
    super();
  }

  getAll(): TestEntityGetAllRequestBuilder<TestEntity<T1, T2>, T1, T2> {
    return new TestEntityGetAllRequestBuilder(TestEntity, this.middleware) as any;
  }
}

export class TestEntityGetAllRequestBuilder<
  EntityT extends EntityV4<T1, T2>,
  T1 = string,
  T2 = number
  > extends GetAllRequestBuilderV4<EntityT>{
  constructor(entityConstructor: Constructable<EntityT>, middleware?: DeSerializationMiddlewareInterface<T1, T2>) {
    super(entityConstructor);
  }
}
