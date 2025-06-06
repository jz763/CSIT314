package eventorganiser.Application.commandservices;

import eventorganiser.domain.model.commands.EventOrganiserCommand;
import eventorganiser.domain.model.entities.EventOrganiser;
import eventorganiser.domain.model.valueobjects.EventOrganiserId;
import eventorganiser.infrastructure.repository.EventOrganiserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class EventOrganiserCommandService {
    private final EventOrganiserRepository eventOrganiserRepository;
    private final PasswordEncoder passwordEncoder;

    public EventOrganiserCommandService(EventOrganiserRepository eventOrganiserRepository,
            PasswordEncoder passwordEncoder) {
        this.eventOrganiserRepository = eventOrganiserRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public EventOrganiserId registerEventOrganiser(EventOrganiserCommand eventOrganiserCommand) {
        String encodedPassword = passwordEncoder.encode(eventOrganiserCommand.getPassword());

        eventOrganiserCommand.setPassword(encodedPassword);

        EventOrganiser eventOrganiser = new EventOrganiser(eventOrganiserCommand);

        eventOrganiserRepository.save(eventOrganiser);

        return eventOrganiser.getEventOrganiserId();
    }

    @Transactional
    public void deleteEventOrganiser(EventOrganiserId eventOrganiserId) {
        EventOrganiser eventOrganiser = eventOrganiserRepository.findByEventOrganiserId(eventOrganiserId);
        if (eventOrganiser == null) {
            throw new IllegalArgumentException("Event Organiser not found");
        }

        eventOrganiserRepository.delete(eventOrganiser);
    }
}
