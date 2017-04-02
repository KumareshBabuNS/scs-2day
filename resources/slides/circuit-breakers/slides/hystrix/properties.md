## Customize Behavior with `@HystrixProperty`

```java
@Service
public class FortuneService {
    ...

  @HystrixCommand
  (fallbackMethod = "defaultFortune",
  commandProperties = {@HystrixProperty
  (name="execution.isolation.thread.timeoutInMilliseconds",
  value="500")})
	public String getFortune() {

	  return restTemplate.getForObject
        ("http://fortune-service", String.class);
	}
}
```
