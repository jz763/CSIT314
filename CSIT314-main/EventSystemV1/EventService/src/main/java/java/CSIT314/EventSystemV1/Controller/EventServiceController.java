package java.CSIT314.EventSystemV1.Controller;

import CSIT314.EventSystemV1.Enitity.EventServiceEntity;
import CSIT314.EventSystemV1.Service.EventServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class EventServiceController {

    private final EventServiceService eventServiceController;

    @Autowired
    public EventServiceController(EventServiceService newEventController){
        this.eventServiceController = newEventController;
    }

    //Create event controller: save event
    @PostMapping("/saveEvent")
    public ResponseEntity<EventServiceEntity> saveNewEventController(@RequestBody EventServiceEntity newEventToBeSaved){
        EventServiceEntity eventToBeSaved = eventServiceController.saveNewEventEntity(newEventToBeSaved);
        return ResponseEntity.ok(eventToBeSaved);
    }

    //Read events controller: get all events
    @GetMapping("/getEvent")
    public List<EventServiceEntity> getAllEventsController(){
        return eventServiceController.getAllEventEntites();
    }

    //Read an event controller: get specific event
    @GetMapping("/getEvent/{eventToBeFoundId}")
    public ResponseEntity<EventServiceEntity> getSpecificEventController(@PathVariable Long eventToBeFoundId){
        Optional<EventServiceEntity> eventToBeFound = eventServiceController.getEventById(eventToBeFoundId);
        return eventToBeFound.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    //Update an event controller: update specific event
    @PutMapping("/getEvent/{eventToBeFoundId}")
    public ResponseEntity<EventServiceEntity> updateEventController(@PathVariable Long eventToBeUpdatedId, @RequestBody EventServiceEntity eventToUpdated){
        EventServiceEntity updatedEvent = eventServiceController.updateEventEntity(eventToBeUpdatedId,eventToUpdated);
        return ResponseEntity.ok(updatedEvent);
    }

    //Delete an event controller
    @DeleteMapping("/getEvent/{eventToBeDeletedId}")
    public ResponseEntity<String> deleteEventController(@PathVariable Long eventToBeDeletedId){
        eventServiceController.removeEvent(eventToBeDeletedId);
        return ResponseEntity.ok("The event has been removed");
    }

}
