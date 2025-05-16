package java.CSIT314.EventSystemV1.Service;

import CSIT314.EventSystemV1.Enitity.EventServiceEntity;
import CSIT314.EventSystemV1.Repository.EventServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventServiceService {
    private final EventServiceRepository eventServiceRepository;

    @Autowired
    public EventServiceService(EventServiceRepository newEventServiceRepo){
        this.eventServiceRepository = newEventServiceRepo;
    }

    //CRUD functionality
    //Create: Save new Event entity
    public EventServiceEntity saveNewEventEntity(EventServiceEntity newEventEntityToBeSaved){
        return eventServiceRepository.save(newEventEntityToBeSaved);
    }

    //Read: Get all Event entities
    public List<EventServiceEntity> getAllEventEntites(){
        return eventServiceRepository.findAll();
    }

    //Read: Get specific Event entity
    public Optional<EventServiceEntity> getEventById(Long eventToBeFoundId){
        return eventServiceRepository.findById(eventToBeFoundId);
    }

    //Update: Amend Event entity
    public EventServiceEntity updateEventEntity(Long eventToBeAmendedId, EventServiceEntity eventEntityAmended){
        Optional<EventServiceEntity> eventToBeAmended = eventServiceRepository.findById(eventToBeAmendedId);
        if(eventToBeAmended.isPresent()){
            EventServiceEntity updatedEventEntity = eventToBeAmended.get();
            updatedEventEntity.setEventEntityName(eventEntityAmended.getEventEntityName());
            updatedEventEntity.setEventEntityDate(eventEntityAmended.getEventEntityDate());
            updatedEventEntity.setEventEntityLocation(eventEntityAmended.getEventEntityLocation());
            updatedEventEntity.setEventEntityTime(eventEntityAmended.getEventEntityTime());
            updatedEventEntity.setEventEntityAttendees(eventEntityAmended.getEventEntityAttendees());
            updatedEventEntity.setEventEntityTickets(eventEntityAmended.getEventEntityTickets());
            return eventServiceRepository.save(updatedEventEntity);
        }else{
            throw new RuntimeException("Could not find Event");
        }
    }

    //Delete: Remove Event Entity
    public void removeEvent(Long removeEventId){
        eventServiceRepository.deleteById(removeEventId);
    }

}
