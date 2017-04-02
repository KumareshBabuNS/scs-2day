## Metrics

Hystrix publishes real-time metrics for each `@HystrixCommand`:

* Informational and Status (`isCircuitOpen`)
* Cumulative and Rolling Event Counts (`countExceptionsThrown` & `rollingCountExceptionsThrown`)
* Latency Percentiles (`latencyExecute_percentile_995`)
* Latency Percentiles: End-to-End Execution ( `latencyTotal_percentile_5`)
* Property Values (`propertyValue_circuitBreakerRequestVolumeThreshold`)


** Thread Pool metrics are also available
