package ticket.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Ticket")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private Integer eventId;

    @Column
    private String attendeeName;

    Ticket()
    {

    }

    Ticket(Integer eventId, String attendeeName)
    {
        this.eventId = eventId;
        this.attendeeName = attendeeName;
    }

    public void setEventId(Integer eventId)
    {
        this.eventId = eventId;
    }

    public Integer getEventId()
    {
        return eventId;
    }

    public void setAttendeeName(String attendeeName)
    {
        this.attendeeName = attendeeName;
    }
}
