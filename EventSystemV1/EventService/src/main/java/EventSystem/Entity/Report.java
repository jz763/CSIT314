package EventSystem.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Reports")
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long reportId;

    @Column
    private String eventId;

    @Column
    private Integer eventTickets;

    @Column
    private Integer eventAttendee;

    public String getEventId(){
        return eventId;
    }
    public Integer getEventTickets(){
        return eventTickets;
    }
    public Integer getEventAttendee() {
        return eventAttendee;
    }

    public void setEventId(String newEventId){
        this.eventId = newEventId;
    }

    public void setEventTickets(Integer newEventTickets){
        this.eventTickets = newEventTickets;
    }

    public void setEventAttendee(Integer newEventAttendees){
        this.eventAttendee = newEventAttendees;
    }
}
