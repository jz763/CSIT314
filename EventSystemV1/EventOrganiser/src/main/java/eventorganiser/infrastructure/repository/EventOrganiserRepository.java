package eventorganiser.infrastructure.repository;

import eventorganiser.domain.model.entities.EventOrganiser;
import eventorganiser.domain.model.valueobjects.EventOrganiserId;
import eventorganiser.domain.model.valueobjects.Username;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EventOrganiserRepository extends JpaRepository<EventOrganiser, Long> {
    EventOrganiser findByEventOrganiserId(EventOrganiserId eventOrganiserId);

    @Query("SELECT e.eventOrganiserId FROM EventOrganiser e")
    List<EventOrganiserId> findAllUserIds();

    EventOrganiser findByUsername(Username username);

    List<EventOrganiser> findAll();
}
