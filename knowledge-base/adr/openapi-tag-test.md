### Expected API
It generates one file (API/Class) for every tag.
The API should look like the pattern `${toPascalCase(Tag)}API.${toCamelCase(operationId)}`:
- `WorkFlowInstancesAPI.getInstance`
- `UserTaskInstancesAPI.getInstance`

### `operationId` and `tags`
```yaml
operationId: getInstance
      tags:
        - Workflow Instances
```
```yaml
operationId: getInstance
      tags:
        - User Task Instances 
```

### Actual
After disabling the global tag (`convertDocToGlobalTag`) handling and the duplicate operationId handling (`convertDocToUniqueOperationIds`).
- `WorkFlowInstancesAPI.getInstance`
- `UserTaskInstancesAPI.getInstance`
Therefore, we are fine with the version of the spec on the API + duplicate operationIds, it's not valid though from the openapi spec perspectives.
