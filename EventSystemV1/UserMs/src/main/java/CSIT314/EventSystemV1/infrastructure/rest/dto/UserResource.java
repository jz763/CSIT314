package CSIT314.EventSystemV1.infrastructure.rest.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class UserResource {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    private String username;

    public UserResource() {}

    public UserResource(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }


}
