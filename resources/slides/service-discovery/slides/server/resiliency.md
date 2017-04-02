## Eureka Resiliency

* Eureka does not have a backend data store.  All data is kept in memory.

* Service instances in the registry all have to send heartbeats to keep their registrations up to date

* Clients also have an in-memory cache of eureka registrations (so they don’t have to go to the registry for every single request to a service)
