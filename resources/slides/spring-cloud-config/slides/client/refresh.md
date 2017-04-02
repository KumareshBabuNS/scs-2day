## Refreshing Configuration


Two step process for applications getting new configuration:

1) Update Repository

2) Send a request to the application(s) to pick up new config values

Send a `POST` request to the refresh endpoint in the client app to fetch updated config values:


`http://127.0.0.1:8080/refresh`

Requires the [`Actuator`](https://spring.io/guides/gs/actuator-service/) dependency on the classpath (`pom.xml`).
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```


Note:

Can also be refreshed through JMX endpoint
