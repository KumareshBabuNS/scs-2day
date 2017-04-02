## Defining Your Own Repository Interface

Extend from the given repository and provide the `domain` and `id` classes:

```java
public interface CitiesRepository extends JpaRepository<Cities, Long>{

}
```
