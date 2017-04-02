## Using the API Directly

Use the `LoadBalancerClient`.

Example:

```java
public class MyClass {

    @Autowired
    private LoadBalancerClient loadBalancer;

    public void doStuff() {

        ServiceInstance instance =
          loadBalancer.choose("stores");

        URI storesUri = URI.create(String.format("http://%s:%s",
          instance.getHost(), instance.getPort()));

        // ... do something with the URI
    }
}
```
