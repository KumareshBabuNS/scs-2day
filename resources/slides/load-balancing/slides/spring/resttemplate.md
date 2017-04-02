## Spring RestTemplate as a Load Balancer Client

`@LoadBalanced` is a qualifier to make certain the load balanced restTemplate is injected

```java
public class MyClass {
    @Autowired
    @LoadBalanced
    private RestTemplate restTemplate;

    public String doOtherStuff() {
        String results =
          restTemplate.getForObject("http://stores/stores",
          String.class);
        return results;
    }
}
```
