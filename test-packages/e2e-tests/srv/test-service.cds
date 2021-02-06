using {cloudsdk.test as cloudsdk} from '../db/schema';

@path : 'test-service'
service TestService {
  entity TestEntity     as projection on cloudsdk.TestEntity;
  entity TestEntityLink as projection on cloudsdk.TestEntityLink;
  function returnSapCloudSdk() returns String;
  function concatStrings(Str1 : String, Str2 : String) returns String;
  function returnInt(param : Integer) returns Integer;
  function returnCollection(param : Integer) returns array of Integer;
  function getByKey(param : Integer) returns TestEntity;
  function getAll() returns array of TestEntity;
  function returnKey(param : TestEntity) returns Integer;
  action createTestEntity(id : Integer) returns TestEntity;
  action createTestEntityReturnId(id : Integer) returns Integer;
}
