## Standalone Mode

* Two caches (server and client) make for a resilient solution when paired with Cloud Foundry

```yml
server:
  port: 8761

eureka:
  instance:
    hostname: localhost
  client:
    registerWithEureka: false
    fetchRegistry: false
    serviceUrl:
      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/

```

Notice that the `serviceUrl` is pointing to the same host as the local instance.
