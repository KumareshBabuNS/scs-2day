<!-- .element: class="textleft-imageright" -->
## Zone Aware Load Balancer

![Zone Aware Load Balancer](slides/resources/images/ZALB-animated.gif)<!-- .element: style="max-width:90%;height:auto;" -->

1. The LB calculates/examines zones stats in real time.  If average active requests have reached a configured threshold the zone will be dropped.

1.  Once the the worst zone is dropped, a zone will be chosen among the rest with the probability proportional to its number of instances.

1. A server will be returned from the chosen zone with a given Rule.

Source: http://techblog.netflix.com/2013/01/announcing-ribbon-tying-netflix-mid.html
Note:

1. The LoadBalancer will calculate and examine zone stats of all available zones. If the active requests per server for any zone has reached a configured threshold, this zone will be dropped from the active server list. In case more than one zone has reached the threshold, the zone with the most active requests per server will be dropped.

2. Once the the worst zone is dropped, a zone will be chosen among the rest with the probability proportional to its number of instances.

3. A server will be returned from the chosen zone with a given Rule (A Rule is a load balancing strategy, for example a simple Round Robin Rule)

For each request, the steps above will be repeated. That is to say, each zone related load balancing decisions are made at real time with the up-to-date statistics aiding the choice.
