package java.CSIT314.EventSystemV1.EventServiceDTO;

import java.sql.Time;
import java.util.Date;
import java.util.List;

public class EventManagerDTO {

    //Attributes / Variables
    private String eventName;
    private Date eventDate;
    private Time eventTime;
    private String eventLocation;
    private List<String> eventTickets;
    private List<String> eventAttendees;

    //Getters

    public String getEventName(){
        return this.eventName;
    }

    public Date getEventDate(){
        return this.eventDate;
    }

    public Time getEventTime(){
        return this.eventTime;
    }

    public String getEventLocation(){
        return this.eventLocation;
    }

    //Setters

    public void setEventName(String eventName){
        this.eventName = eventName;
    }

    public void setEventDate(Date eventDate){
        this.eventDate = eventDate;
    }

    public void setEventTime(Time eventTime){
        this.eventTime = eventTime;
    }

    public void setEventLocation(String eventLocation){
        this.eventLocation = eventLocation;
    }

    public void setEventTickets(List<String> eventTickets){
        this.eventTickets = eventTickets;
    }

    public void setEventAttendees(List<String> eventAttendees){
        this.eventAttendees = eventAttendees;
    }
}
