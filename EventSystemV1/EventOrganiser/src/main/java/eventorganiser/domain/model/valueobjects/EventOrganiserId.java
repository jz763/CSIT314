package eventorganiser.domain.model.valueobjects;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.util.UUID;

@Embeddable
public class EventOrganiserId {
    @Column(name = "EventOrganiserId")
    private String eventOrganiserId;

    public EventOrganiserId() {
        this.eventOrganiserId = UUID.randomUUID().toString();
    }

    public EventOrganiserId(String eventOrganiserId ) {
        this.eventOrganiserId = eventOrganiserId;
    }

    public String getEventOrganiserId() {
        return eventOrganiserId;
    }
}
