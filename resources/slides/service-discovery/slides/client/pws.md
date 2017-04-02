## Pivotal Web Services

PWS has a global router so that all application instances have the same hostname.

Because of this we need to explicitly set the hostname and port number so that they use the router.

```yml
eureka:
  instance:
    hostname: ${vcap.application.uris[0]}
    nonSecurePort: 80
```
