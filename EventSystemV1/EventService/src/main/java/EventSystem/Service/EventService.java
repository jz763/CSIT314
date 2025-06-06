package EventSystem.Service;

import EventSystem.Entity.Event;
import EventSystem.Repository.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    private final RestClient restClient;
    private final EventRepo eventServiceRepo;

    @Autowired
    public EventService(EventRepo newEventRepo, RestClient.Builder restClientBuilder){
        this.eventServiceRepo = newEventRepo;
        this.restClient = restClientBuilder.baseUrl("http://localhost:8080/eventOrganiser").build();
    }

    //CRUD functionality

    //Create
    public Event saveNewEvent(Event newEventToBeSaved){
        return eventServiceRepo.save(newEventToBeSaved);
    }

    //Read all events
    public List<Event> getAllEvents(){
        return eventServiceRepo.findAll();
    }

    //Read specific event
    public Optional<Event> getEventById(Long findEventId){
        return eventServiceRepo.findById(findEventId);
    }

    //Update
    public Event updateEvent(Long updateEventId, Event updateEvent){
        Optional<Event> eventToBeUpdated = eventServiceRepo.findById(updateEventId);
        if(eventToBeUpdated.isPresent()){
            Event tempEvent = eventToBeUpdated.get();
            tempEvent.setEventName(updateEvent.getEventName());
            tempEvent.setEventDate(updateEvent.getEventDate());
            tempEvent.setEventTime(updateEvent.getEventTime());
            tempEvent.setEventLocation(updateEvent.getEventLocation());
            tempEvent.setEventAttendees(updateEvent.getEventAttendees());
            tempEvent.setEventTickets(updateEvent.getEventTickets());
            return eventServiceRepo.save(tempEvent);
        } else {
            throw new RuntimeException("Could not find event to be updated");
        }
    }

    //Delete
    public void removeEvent(Long removeEventId){
        eventServiceRepo.deleteById(removeEventId);
    }


}
