package CSIT314.EventSystemV1.domain.model.valueobjects;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.util.UUID;

@Embeddable
public class UserId {

    @Column(name="UserId")
    private String userId;

    public UserId() {
        this.userId = UUID.randomUUID().toString();
    }

    public UserId(String userId) {
        this.userId = userId;
    }

    public String getUserId() {
        return this.userId;
    }
}
