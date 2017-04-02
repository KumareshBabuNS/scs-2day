## Client Application

Typical Spring Configuration without Spring Cloud Config:

```java
@SpringBootApplication
@RestController
public class ClientConfigApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClientConfigApplication.class, args);
	}

	@Value("${greeting}") //<-- configuration injected from environment
	private String greeting;

	@RequestMapping("/greeting")
	String greeting() {
		return String.format("%s World", greeting);
	}

}
```
