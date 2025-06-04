package CSIT314.EventSystemV1.domain.model.valueobjects;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class Username {

    @Column(name="Username")
    private String username;

    public Username() {}

    public Username(String username) {
        this.username = username;
    }

    public String getUsername() {
        return this.username;
    }
}
