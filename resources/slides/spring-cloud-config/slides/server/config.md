## Server Config

* Application configuration data is stored in a backend

* Git, Subversion and File System backends are supported

* Git is the default backend.  It's great for auditing changes and managing upgrades

* Setting the git backend is done via the `spring.cloud.config.server.git.uri` configuration property

Sample `application.yml`:
```
spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/spring-cloud-samples/config-repo.git
```
