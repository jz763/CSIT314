package EventSystemV1.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import EventSystemV1.Enitity.EventServiceEntity;

@Repository
public interface EventServiceRepository extends JpaRepository<EventServiceEntity,Long> {
}
