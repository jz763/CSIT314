package java.CSIT314.EventSystemV1.EventServiceDTO;

import java.sql.Time;
import java.util.Date;


public class EventDTO {

    //Attributes / Variables
    private String eventName;
    private Date eventDate;
    private Time eventTime;
    private String eventLocation;

    //Getters
    public String getEventName(){
        return this.eventName;
    }

    public Time getEventTime(){
        return this.eventTime;
    }

    public Date getEventDate(){
        return this.eventDate;
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
}
