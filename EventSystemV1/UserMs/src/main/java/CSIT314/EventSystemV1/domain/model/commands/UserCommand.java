package CSIT314.EventSystemV1.domain.model.commands;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class UserCommand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String userId;

    private String username;

    public UserCommand() {}

    public UserCommand(String username) {
        this.username = username;
    }

    public String getUserId()
    {
        return userId;
    }

    public String getUsername() {
        return username;
    }
}
