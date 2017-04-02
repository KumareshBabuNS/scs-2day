## Client Config

Configuration required to locate the Eureka.

`application.yml`
```yml
spring:
  application:
    name: fortune-service
eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/
```


* `defaultZone` - the default `serviceUrl` to reach Eureka
* `spring.application.name` is the name the application will use to register its service
