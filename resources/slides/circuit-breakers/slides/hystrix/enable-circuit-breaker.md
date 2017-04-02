## `@EnableCircuitBreaker` Annotation


```java
@SpringBootApplication
@EnableDiscoveryClient
@EnableCircuitBreaker
public class GreetingHystrixApplication {


    public static void main(String[] args) {
        SpringApplication.run(GreetingHystrixApplication.class, args);
    }

}
```
