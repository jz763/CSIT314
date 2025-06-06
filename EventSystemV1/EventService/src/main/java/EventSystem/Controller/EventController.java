package EventSystem.Controller;


import EventSystem.Entity.Event;
import EventSystem.Service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
@CrossOrigin("http://localhost:5173")
public class EventController {
    private final EventService eventService;

    @Autowired
    public EventController(EventService newEventService){
        this.eventService = newEventService;
    }

    //CRUD functions

    //Create event controller
    @CrossOrigin("http://localhost:5173")
    @PostMapping("/saveEvent")
    public ResponseEntity<Event> saveNewEvent(@RequestBody Event newEventToBeSaved){
        Event saveEvent = eventService.saveNewEvent(newEventToBeSaved);
        return ResponseEntity.ok(newEventToBeSaved);
    }

    //Read all events
    @CrossOrigin("http://localhost:5173")
    @GetMapping("/getAllEvents")
    public List<Event> getAllEvents(){
        return eventService.getAllEvents();
    }

    //Read specific event
    @GetMapping("/getEvent/{findEventId}")
    public ResponseEntity<Event> getSpecificEvent(@PathVariable Long findEventId){
        Optional<Event> eventToBeFound = eventService.getEventById(findEventId);
        return eventToBeFound.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    //Updates specific event
    @PutMapping("/updateEvent/{updateEventId}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long updateEventId, @RequestBody Event updatedEvent){
        Event updateEvent = eventService.updateEvent(updateEventId,updatedEvent);
        return ResponseEntity.ok(updateEvent);
    }

    //Delete specific event
    @DeleteMapping("/removeEvent/{removeEventId}")
    public ResponseEntity<String> deleteEvent(@PathVariable Long removeEventId){
        eventService.removeEvent(removeEventId);
        return ResponseEntity.ok("The event has been removed");
    }


}
