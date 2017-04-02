## Discovery Client

The `DiscoveryClient` is used to locate the stores service.

```java
@Autowired
private DiscoveryClient discoveryClient;

public String serviceUrl() {
    InstanceInfo instance =
      discoveryClient.getNextServerFromEureka("STORES", false);
    return instance.getHomePageUrl();
}

```
