## Fault Tolerance

One failure must not cause a cascading failure across the entire system.


For example, for an application that depends on 30 services where each service has 99.99% uptime, here is what you can expect:

    99.99^30 = 99.7% uptime

    0.3% of 1 billion requests = 3,000,000 failures

    2+ hours downtime/month even if all dependencies have excellent uptime.

Reality is _generally_ worse.

Source: https://github.com/Netflix/Hystrix/wiki
