## Hystrix Applications

To publish metrics over AMQP, Hystrix based apps simply include the following dependency in the `pom.xml`
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-netflix-hystrix-amqp</artifactId>
</dependency>
```

Nothing else is needed when using a local RabbitMQ broker or running in Pivotal Cloud Foundry.
