package CSIT314.EventSystemV1.domain.model.entities;

import CSIT314.EventSystemV1.domain.model.commands.UserCommand;
import CSIT314.EventSystemV1.domain.model.valueobjects.UserId;
import CSIT314.EventSystemV1.domain.model.valueobjects.Username;
import jakarta.persistence.*;

@Entity
@Table(name = "user_attendee")
public class UserAttendee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Embedded
    private UserId userId;

    @Embedded
    private Username username;

    public UserAttendee()
    {
        this.userId = new UserId();
        this.username = new Username();
    }

    public UserAttendee(UserCommand userCommand) {
        this.userId = new UserId(userCommand.getUserId());
        this.username = new Username(userCommand.getUsername());
    }

    public int getId() {return id;}

    public UserId getUserId() {return userId;}

    public Username getUsername() {return username;}

}
