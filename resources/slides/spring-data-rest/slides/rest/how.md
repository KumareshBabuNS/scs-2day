## Exporting Repositories


```java
public interface OrderRepository extends
  CrudRepository<Order, Long> {

  List<Order> findByDate(@Param("date") Date date);

}

```

* For this repository, Spring Data REST exposes a collection resource at `/orders`.

* The path is derived from the uncapitalized, pluralized, simple class name of the domain class being managed.

* It also exposes an item resource for each of the items managed by the repository under the URI template `/orders/{id}`.

* Custom queries are exported to `/search`. E.g. `/search/findByDate`
