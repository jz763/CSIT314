package eventorganiser.infrastructure.rest;

import eventorganiser.Application.commandservices.EventOrganiserCommandService;
import eventorganiser.Application.queryservices.EventOrganiserQueryService;
import eventorganiser.domain.model.commands.EventOrganiserCommand;
import eventorganiser.domain.model.entities.EventOrganiser;
import eventorganiser.domain.model.valueobjects.EventOrganiserId;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/eventOrganiser")
public class EventOrganiserController {
    private EventOrganiserQueryService eventOrganiserQueryService;
    private EventOrganiserCommandService eventOrganiserCommandService;

    public EventOrganiserController(EventOrganiserQueryService eventOrganiserQueryService, EventOrganiserCommandService eventOrganiserCommand) {
        this.eventOrganiserQueryService = eventOrganiserQueryService;
        this.eventOrganiserCommandService = eventOrganiserCommandService;
    }

    @PostMapping("/create")
    @ResponseBody
    public EventOrganiserId create(@RequestBody EventOrganiserCommand eventOrganiserCommand) {
        return eventOrganiserCommandService.registerEventOrganiser(eventOrganiserCommand);
    }

    @GetMapping("/findAllEventOrganiserIds")
    @ResponseBody
    public List<EventOrganiserId> getEventOrganisersIds() {
        return eventOrganiserQueryService.findAllEventOrganiserIds();
    }

    @GetMapping("/findEventOrganiser")
    @ResponseBody
    public EventOrganiser getEventOrganiser(@RequestParam EventOrganiserId eventOrganiserId) {
        return eventOrganiserQueryService.findById(eventOrganiserId);
    }

    @GetMapping("/findAllEventOrganisers")
    @ResponseBody
    public List<EventOrganiser> getAllEventOrganisers() {
        return eventOrganiserQueryService.findAll();
    }

    @DeleteMapping
    @ResponseBody
    public void deleteEventOrganiser(@RequestParam String eventOrganiserId) {
        eventOrganiserCommandService.deleteEventOrganiser(new EventOrganiserId(eventOrganiserId));
    }
}
