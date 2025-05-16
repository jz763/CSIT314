package java.CSIT314.EventSystemV1.EventServiceDTO;

import CSIT314.EventSystemV1.Enitity.EventServiceEntity;

import java.util.List;

public class EventListDTO {

    //Attributes / Variables
    private List<EventServiceEntity> eventList;

    //Getters
    public List<EventServiceEntity> getEventList(){
        return this.eventList;
    }

    //Setters
    public void setEventList(List<EventServiceEntity> eventList){
        this.eventList = eventList;
    }
}
