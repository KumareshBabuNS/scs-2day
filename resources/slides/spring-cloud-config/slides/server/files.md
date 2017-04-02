## Configuration Files

What files do I put my configuration in?

Config files are stored in the git repository.

Example Input:
* `spring.application.name`=foo
* `spring.active.profiles`=dev

Union of all sources with overriding behavior.

Repo Files:
* `application.yml` - shared between all clients
* `application-dev.yml` - shared between all clients but profile specific (takes precedence over `application.yml`)
* `foo.yml` -  app specific (takes precedence over `application.yml` files)
* `foo-dev.yml` -  app and profile specific (takes precedence over `foo.yml`)
