package CSIT314.EventSystemV1.domain.model.valueobjects;

import jakarta.persistence.Embeddable;

@Embeddable
public class Password {
    private String password;

    public Password() {

    }

    public Password(String password) {
        this.password = password;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
