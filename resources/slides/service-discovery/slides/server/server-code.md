## Eureka Server

An example Eureka server. `@EnableEurekaServer` annotation.


```java
@SpringBootApplication
@EnableEurekaServer
public class ServiceRegistryApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServiceRegistryApplication.class, args);
    }
}
```
