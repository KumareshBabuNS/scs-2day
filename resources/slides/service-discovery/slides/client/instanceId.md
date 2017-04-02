## Instance Id

By default, a service instance is registered  with an ID that is equal to it's hostname.  This means one service per host.

This can be overridden by specifying the `instanceId`.

```yml
eureka:
  instance:
    metadataMap:
      instanceId: ${vcap.application.instance_id:${spring.application.name}:${server.port:8080}}

```
