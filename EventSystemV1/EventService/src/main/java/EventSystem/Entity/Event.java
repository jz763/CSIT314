package EventSystem.Entity;


import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long eventId;

    @Column(nullable = false)
    private String eventName;

    @Column(nullable = false)
    private String eventDate;

    @Column(nullable = false)
    private String eventTime;

    @Column(nullable = false)
    private String eventLocation;

    @Column()
    private List<Long> eventAttendees;

    @Column()
    private List<Long> eventTickets;

    public String getEventName(){
        return eventName;
    }

    public String getEventDate(){
        return eventDate;
    }

    public String getEventTime(){
        return eventTime;
    }

    public String getEventLocation(){
        return eventLocation;
    }

    public List<Long> getEventAttendees(){
        return eventAttendees;
    }

    public List<Long> getEventTickets(){
        return eventTickets;
    }

    public void setEventName(String newEventName){
        this.eventName = newEventName;
    }

    public void setEventDate(String newEventDate){
        this.eventDate = newEventDate;
    }

    public void setEventTime(String newEventTime){
        this.eventTime = newEventTime;
    }

    public void setEventLocation(String newEventLocation){
        this.eventLocation = newEventLocation;
    }
    public void setEventAttendees(List<Long> newEventAttendees){
        this.eventAttendees = newEventAttendees;
    }

    public void setEventTickets(List<Long> newEventTicktes){
        this.eventTickets = newEventTicktes;
    }

    public void addAttendee(Long userId){
        eventAttendees.add(userId);
    }

    public void removeAttendee(Long userId){
        eventAttendees.remove(userId);
    }
}
