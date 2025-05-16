package java.CSIT314.EventSystemV1;

import CSIT314.EventSystemV1.Enitity.EventServiceEntity;
import CSIT314.EventSystemV1.EventServiceDTO.EventDTO;
import org.springframework.stereotype.Component;

import java.sql.Time;
import java.util.Date;
import java.util.List;

@Component
public class EventServiceMapper {

    //Mapper from business entity to DTO
    public EventDTO eventEntityToDto(EventServiceEntity event){
        String eventName = event.getEventEntityName();
        Date eventDate = event.getEventEntityDate();
        Time eventTime = event.getEventEntityTime();
        String eventLocation = event.getEventEntityLocation();
        List<String> eventAttendees = event.getEventEntityAttendees();
        /*
        for future when Attendees are a class maps attendees to attendee list.
        List<String> eventAttendees = event.getEventEntityAttendees().stream().map(Attendee::getName).collect(toList());
        need constructor for DTO below
        */
        return new EventDTO();
    }
}
