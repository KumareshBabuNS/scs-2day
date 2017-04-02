## Customizing the Ribbon Client

Spring Cloud Netflix provides the following beans by default for ribbon (BeanType beanName: ClassName):

* `IRule` ribbonRule: `ZoneAvoidanceRule`
* `IPing` ribbonPing: `NoOpPing`
* `ILoadBalancer` ribbonLoadBalancer: `ZoneAwareLoadBalancer`
* ...

Creating a bean of one of those types and placing it in a @RibbonClient configuration allows you to override each one of the beans described. Example:

```java
@Configuration
@RibbonClient(name = "foo", configuration = FooConfiguration.class)
public class FooConfiguration {
    @Bean
    public IPing ribbonPing(IClientConfig config) {
        return new PingUrl();
    }
}
```
This replaces the NoOpPing with PingUrl.
