## ALPS Explained

`http://localhost:8080/alps/persons`

```json
{
  "version" : "1.0",
  "descriptors" : [ {
    "id" : "person-representation", //representation of domain
    "descriptors" : [ {
      "name" : "firstName",
      "type" : "SEMANTIC"
    }, {
      "name" : "lastName",
      "type" : "SEMANTIC"
    }, {
      "name" : "id",
      "type" : "SEMANTIC"
    }]
  }, {
    "id" : "create-persons", //operations
    "name" : "persons",
    "type" : "UNSAFE",
    "rt" : "#person-representation"
  }, {
    "id" : "get-persons",
    "name" : "persons",
    "type" : "SAFE",
    "rt" : "#person-representation"
  }, {
    "id" : "delete-person",
    "name" : "person",
    "type" : "IDEMPOTENT",
    "rt" : "#person-representation"
  }, {
    "id" : "patch-person",
    "name" : "person",
    "type" : "UNSAFE",
    "rt" : "#person-representation"
  }, {
    "id" : "update-person",
    "name" : "person",
    "type" : "IDEMPOTENT",
    "rt" : "#person-representation"
  }, {
    "id" : "get-person",
    "name" : "person",
    "type" : "SAFE",
    "rt" : "#person-representation"
  } ]
}
```
