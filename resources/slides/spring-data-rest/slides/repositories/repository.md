## Repositories

Tired of Creating/Maintaining Boilerplate Code?

Use Spring Repositories.  CRUD support added with no implementation required.

```java
public interface CrudRepository<T, ID extends Serializable>
    extends Repository<T, ID> {

    // Saves the given entity
    <S extends T> S save(S entity);

    // Returns the entity identified by the given id.
    T findOne(ID primaryKey);

    // Returns all entities.
    Iterable<T> findAll();

    // Deletes the given entity.
    void delete(T entity);

    // … more functionality omitted.
}
```
