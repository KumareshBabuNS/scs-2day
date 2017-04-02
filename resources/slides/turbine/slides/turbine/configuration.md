## Turbine Configuration

`bootstrap.yml`:
```yml
turbine:
  aggregator:
    clusterConfig: GREETING-HYSTRIX
  appConfig: greeting-hystrix
```

`turbine.appConfig` is a list of Eureka serviceIds that Turbine will use to lookup instances.

`turbine.aggregator.clusterConfig` is the Turbine cluster these services belong too.
