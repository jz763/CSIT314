package eventorganiser.domain.model.valueobjects;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class Password {
    @Column(name = "Password")
    private String password;

    public Password() {}

    public Password(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }
}
