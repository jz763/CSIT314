package eventorganiser.domain.model.entities;

import eventorganiser.domain.model.commands.EventOrganiserCommand;
import eventorganiser.domain.model.valueobjects.EventOrganiserId;
import eventorganiser.domain.model.valueobjects.Password;
import eventorganiser.domain.model.valueobjects.Username;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "EventOrganiser")
public class EventOrganiser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Embedded
    private EventOrganiserId eventOrganiserId;

    @Embedded
    private Username username;

    @Embedded
    private Password password;

    public EventOrganiser() {}

    public EventOrganiser(EventOrganiserCommand eventOrganiserCommand) {
        this.eventOrganiserId = new EventOrganiserId(eventOrganiserCommand.getEventOrganiserId());
        this.username = new Username(eventOrganiserCommand.getUsername());
        this.password = new Password(eventOrganiserCommand.getPassword());
    }

    public int getId() {
        return id;
    }

    public EventOrganiserId getEventOrganiserId() {
        return eventOrganiserId;
    }

    public Username getUsername() {
        return username;
    }

    public Password getPassword() {
        return password;
    }
}
