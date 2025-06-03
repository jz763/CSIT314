package eventorganiser.Application.queryservices;

import eventorganiser.domain.model.entities.EventOrganiser;
import eventorganiser.domain.model.valueobjects.EventOrganiserId;
import eventorganiser.domain.model.valueobjects.Username;
import eventorganiser.infrastructure.repository.EventOrganiserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventOrganiserQueryService {
    private EventOrganiserRepository eventOrganiserRepository;

    public EventOrganiserQueryService(EventOrganiserRepository eventOrganiserRepository) {
        this.eventOrganiserRepository = eventOrganiserRepository;
    }

    public List<EventOrganiser> findAll() {
        return this.eventOrganiserRepository.findAll();
    }

    public EventOrganiser findById(EventOrganiserId eventOrganiserId) {
        return this.eventOrganiserRepository.findByEventOrganiserId(eventOrganiserId);
    }

    public List<EventOrganiserId> findAllEventOrganiserIds() {
        return this.eventOrganiserRepository.findAllUserIds();
    }

    public EventOrganiser findByUsername(Username username) {
        return this.eventOrganiserRepository.findByUsername(username);
    }
}
