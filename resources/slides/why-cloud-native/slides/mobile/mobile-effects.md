<!-- .element: class="textleft-imageright" -->

## Mobile Effects on Application Design

![iPhone](slides/resources/images/iphone.jpg "iPhone") <!-- .element: style="border:1px solid black;" -->

* Dynamic Workloads
* No downtime
* Integration with Legacy
* API Gateway Pattern


Note:

Applications should be able to scale with highly dynamic workloads: retailer sales, banking etc.  Cloud native application design helps be allowing you to scale the right parts of your application.

The expectation for applications is to not have any downtime.  This means that upgrades should be done with blue/green deployments and mitigate risks by instead of upgrading an entire monolith but only the given service.

Legacy systems often times still need to be integrated in mobile applications along with other microservices.  Design patterns such as the API gateway are central to cloud native architectures.  In this case, API gateways are created server side to provide an optimal interface for mobile applications to use without th mobile developers need knowledge of the legacy system or microservices. 
