## `@EnableTurbineAmqp`

For Turbine to consume metrics over AMQP, annotate your application with `@EnableTurbineAmqp`
```java
@SpringBootApplication
@EnableTurbineAmqp
public class TurbineApplication {

    public static void main(String[] args) {
        new SpringApplicationBuilder(TurbineApplication.class).
          web(false).run(args);
    }

```
