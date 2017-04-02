## Embedded Server

The server is easily embeddable in a Spring Boot application using the `@EnableConfigServer` annotation.

This app is a config server:


```java
@SpringBootApplication
@EnableConfigServer
public class ConfigServer {
  public static void main(String[] args) {
    SpringApplication.run(ConfigServer.class, args);
  }
}
```
