import {
  defaultDestination,
  mockDestinationsEnv,
  mockGetRequest,
  unmockDestinationsEnv
} from '../../../test/test-util/request-mocker';
import {
  createOriginalTestEntityData1,
  createOriginalTestEntityData2,
  createTestEntity
} from '../../../test/test-util/test-data';
import { TestEntity } from '../../../test/test-util/test-services/v2/test-service';
import { GetAllRequestBuilder } from './get-all-request-builder';

describe('GetAllRequestBuilder', () => {
  let requestBuilder: GetAllRequestBuilder<TestEntity>;

  afterEach(() => {
    unmockDestinationsEnv();
  });

  beforeEach(() => {
    requestBuilder = new GetAllRequestBuilder(TestEntity);
  });

  describe('url', () => {
    it('is built correctly', async () => {
      const expected =
        '/testination/sap/opu/odata/sap/API_TEST_SRV/A_TestEntity?$format=json';
      const actual = await requestBuilder.url(defaultDestination);
      expect(actual).toBe(expected);
    });

    it('is built correctly with URI encoding', async () => {
      const expected =
        "/testination/sap/opu/odata/sap/API_TEST_SRV/A_TestEntity?$format=json&$filter=(StringProperty eq '%C3%A4%20%C3%B6%2B%20''c')";
      const actual = await requestBuilder
        .filter(TestEntity.STRING_PROPERTY.equals("ä ö+ 'c"))
        .url(defaultDestination);
      expect(actual).toBe(expected);
    });
  });

  describe('execute', () => {
    it('is possible to use untyped properties', async () => {
      const entityData1 = {
        SomethingTheSDKDoesNotSupport: 'SomeValue'
      };

      mockGetRequest({
        query: { $select: 'SomethingTheSDKDoesNotSupport' },
        responseBody: { d: { results: [entityData1] } }
      });

      const actual = await requestBuilder
        .select(TestEntity.SOMETHING_THE_SDK_DOES_NOT_SUPPORT)
        .execute(defaultDestination);
      expect(actual[0].somethingTheSdkDoesNotSupport).toBe('SomeValue');
    });

    it('returns all entities', async () => {
      const entityData1 = createOriginalTestEntityData1();
      const entityData2 = createOriginalTestEntityData2();

      mockGetRequest({
        responseBody: { d: { results: [entityData1, entityData2] } }
      });

      const actual = await requestBuilder.execute(defaultDestination);
      expect(actual).toEqual([
        createTestEntity(entityData1),
        createTestEntity(entityData2)
      ]);
    });

    it('top(1) returns the first entity', async () => {
      const entityData1 = createOriginalTestEntityData1();
      mockGetRequest({
        query: { $top: 1 },
        responseBody: { d: { results: [entityData1] } }
      });

      const actual = await requestBuilder.top(1).execute(defaultDestination);
      expect(actual).toEqual([createTestEntity(entityData1)]);
    });

    it('skip(1) skips the first entity', async () => {
      const entityData2 = createOriginalTestEntityData2();
      mockGetRequest({
        query: { $skip: 1 },
        responseBody: { d: { results: [entityData2] } }
      });
      const actual = await requestBuilder.skip(1).execute(defaultDestination);
      expect(actual).toEqual([createTestEntity(entityData2)]);
    });

    it('throws an error when the destination cannot be found', async () => {
      mockDestinationsEnv(defaultDestination);

      const getAllRequest = requestBuilder.execute({
        destinationName: 'NonExistentDestination'
      });

      await expect(getAllRequest).rejects.toThrowErrorMatchingSnapshot();
    });

    it('throws an error when request execution fails', async () => {
      mockGetRequest({
        responseBody: { error: 'ERROR' },
        statusCode: 500
      });

      const getAllRequest = requestBuilder.execute(defaultDestination);

      await expect(getAllRequest).rejects.toThrowErrorMatchingSnapshot();
    });
  });
});
