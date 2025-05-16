package java.CSIT314.EventSystemV1.Enitity;

import jakarta.persistence.*;

import java.sql.Time;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Events")
public class EventServiceEntity {

    //Attributes and Variables

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long eventEntityId;

    @Column(nullable = false)
    private String eventEntityName;

    @Column(nullable = false)
    private Date eventEntityDate;

    @Column(nullable = false)
    private Time eventEntityTime;

    @Column(nullable = false)
    private String eventEntityLocation;

    @Column(nullable = false)
    private List<String> eventEntityTickets;

    @Column(nullable = false)
    private List<String> eventEntityAttendees;

    //Constructors

    public EventServiceEntity(){}

    public EventServiceEntity(String eventName,Date eventDate, Time eventTime, String eventLocation, List<String> eventTicktets, List<String> eventAttendees){
        this.eventEntityName = eventName;
        this.eventEntityDate = eventDate;
        this.eventEntityTime = eventTime;
        this.eventEntityLocation = eventLocation;
        this.eventEntityAttendees = eventAttendees;
        this.eventEntityTickets = eventTicktets;
    }

    //Getters
    public String getEventEntityName(){
        return eventEntityName;
    }

    public Date getEventEntityDate(){
        return eventEntityDate;
    }

    public Time getEventEntityTime(){
        return eventEntityTime;
    }

    public String getEventEntityLocation(){
        return eventEntityLocation;
    }

    public List<String> getEventEntityTickets(){
        return eventEntityTickets;
    }

    public List<String> getEventEntityAttendees(){
        return eventEntityAttendees;
    }

    //Setters
    public void setEventEntityName(String newEventName){
        this.eventEntityName = newEventName;
    }

    public void setEventEntityDate(Date newEventDate){
        this.eventEntityDate = newEventDate;
    }

    public void setEventEntityTime(Time newEventTime){
        this.eventEntityTime = newEventTime;
    }

    public void setEventEntityLocation(String newEventLocation){
        this.eventEntityLocation = newEventLocation;
    }

    public void setEventEntityTickets(List<String> newEventTickets){
        this.eventEntityTickets = newEventTickets;
    }

    public void setEventEntityAttendees(List<String> newEventAttendees){
        this.eventEntityAttendees = newEventAttendees;
    }

    //Other functions
        //Add new Tickets
    public void addNewEventEntityTickets(){
        //need to make Ticket service
    }

        //Remove Tickets
    public void removeEventEntityTickets(){
        //need to make Ticket service
    }

        //Add new Attendees
    public void addNewEventEntityAttendees(){
        //need to make Attendee service
    }
        //Remove Attendees
    public void removeEventEntityAttendees(){
        //need to make Attendee service
    }

}
