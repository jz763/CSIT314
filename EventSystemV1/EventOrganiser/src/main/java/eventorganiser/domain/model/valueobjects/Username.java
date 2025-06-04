package eventorganiser.domain.model.valueobjects;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Column;

@Embeddable
public class Username {
    @Column(name = "Username")
    private String username;

    public Username() {}

    public Username(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }
}
