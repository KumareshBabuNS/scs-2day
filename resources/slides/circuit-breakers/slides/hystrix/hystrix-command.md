## `@HystrixCommand` annotation

```java
@Service
public class FortuneService {
    ...

	@HystrixCommand(fallbackMethod = "defaultFortune")
	public String getFortune() {

	  return restTemplate.getForObject
        ("http://fortune-service", String.class);
	}

	public String defaultFortune(){
		logger.debug("Default fortune used.");
		return "This fortune is no good. Try another.";
	}
}
```
