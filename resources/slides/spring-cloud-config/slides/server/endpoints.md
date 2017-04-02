## Server Endpoints

Config server exposes config on the following endpoints:

```
/{application}/{profile}/[{label}]
/{application}-{profile}.yml
/{label}/{application}-{profile}.yml
/{application}-{profile}.properties
/{label}/{application}-{profile}.properties
```

* {application} maps to "spring.application.name" on the client side;

* {profile} maps to "spring.active.profiles" on the client (comma separated list); and

* {label} which is a server side feature labelling a "versioned" set of config files.


Note:
Review /mappings for additional mapping endpoints
