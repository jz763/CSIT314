package eventorganiser.domain.model.commands;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class EventOrganiserCommand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String eventOrganiserId;

    private String username;

    private String password;

    public EventOrganiserCommand() {
    }

    public EventOrganiserCommand(String username, String Password) {
        this.username = username;
        this.password = Password;
    }

    public String getEventOrganiserId() {
        return eventOrganiserId;
    }

    public void setEventOrganiserId(String eventOrganiserId) {
        this.eventOrganiserId = eventOrganiserId;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
