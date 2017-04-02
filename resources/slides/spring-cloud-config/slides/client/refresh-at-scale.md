<!-- .element: class="textleft-imageright" -->
## Spring Cloud Bus

![RabbitMQ](slides/resources/images/rmq.png "RabbitMQ")<!-- .element: style="width:auto;" -->

When running many applications, refreshing each one can be cumbersome.

Instead, leverage Spring Cloud Bus pub/sub notification with RabbitMQ.

Send a POST request to the refresh endpoint to fetch updated config values:

`http://127.0.0.1:8080/bus/refresh`


Requires the [`Cloud Bus AMQP`](http://cloud.spring.io/spring-cloud-bus/) dependency on the classpath (`pom.xml`).
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-bus-amqp</artifactId>
</dependency>
```
