package eventorganiser.infrastructure.rest.transform;

import eventorganiser.domain.model.commands.EventOrganiserCommand;
import eventorganiser.infrastructure.rest.dto.EventOrganiserResource;

public class OrganiserCommandDTOAssembler {
    public static EventOrganiserCommand toCommandFromDTO(EventOrganiserResource eventOrganiserResource) {
        return new EventOrganiserCommand(
                eventOrganiserResource.getUsername(),
                eventOrganiserResource.getPassword()
        );
    }
}
