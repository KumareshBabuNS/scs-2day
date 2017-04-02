## Hystrix & Turbine in Pivotal Cloud Foundry

* In Pivotal Cloud Foundry, the classic model of pulling metrics from event streams doesn’t when applications register with Eureka using their `route`.

* When applications register with their `route` every instance has the same url, making it impossible to distinguish between app instances.

* Therefore, metrics are published through a AMQP message broker on Pivotal Cloud Foundry.  We'll use RabbitMQ.
