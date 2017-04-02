## Client Config

For Spring clients to use the configuration server, specify the `spring.cloud.config.uri` configuration property:

Sample `bootstrap.yml`
```none
spring:
  cloud:
    config:
      uri: http://my-config-server.io/
```

`spring.cloud.config.uri` defaults to http://localhost:8888
