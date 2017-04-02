## `@Query` as an Alternative to Keywords

A JPA based repository using the `@Query` annotation.

```java
public interface UserRepository extends JpaRepository<User, Long> {

  @Query("select u from User u where u.emailAddress = ?1")
  User findByEmailAddress(String emailAddress);
}
```
