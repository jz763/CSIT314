package eventorganiser.infrastructure.rest.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.apache.logging.log4j.message.StringFormattedMessage;

public class EventOrganiserResource {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventOrganiserId;

    private String username;

    private String password;

    public EventOrganiserResource() {}

    public EventOrganiserResource(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
