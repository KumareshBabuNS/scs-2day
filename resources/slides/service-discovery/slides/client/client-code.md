## Client Application

An example client application. `@EnableDiscoveryClient` annotation.

```java
@SpringBootApplication
@EnableDiscoveryClient
public class GreetingServiceApplication {


    public static void main(String[] args) {
        SpringApplication.run(GreetingServiceApplication.class, args);
    }

}
```
