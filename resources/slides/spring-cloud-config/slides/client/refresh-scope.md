## `@RefreshScope`

Annotate bean with `@RefreshScope`:
```java
@SpringBootApplication
@RestController
@RefreshScope // <-- Add RefreshScope annotation
public class ClientApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClientApplication.class, args);
	}

	@Value("${greeting}")
	private String greeting;

	@RequestMapping("/greeting")
	String greeting() {
		return String.format("%s World", greeting);
	}

}
```
