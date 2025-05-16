package java.CSIT314.EventSystemV1.Repository;

import CSIT314.EventSystemV1.Enitity.EventServiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventServiceRepository extends JpaRepository<EventServiceEntity,Long> {
}
