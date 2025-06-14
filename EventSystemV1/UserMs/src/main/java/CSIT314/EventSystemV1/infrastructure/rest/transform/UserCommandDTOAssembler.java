package CSIT314.EventSystemV1.infrastructure.rest.transform;

import CSIT314.EventSystemV1.domain.model.commands.UserCommand;
import CSIT314.EventSystemV1.infrastructure.rest.dto.UserResource;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class UserCommandDTOAssembler {

    public static UserCommand toCommandFromDTO(UserResource userResource)
    {
        return new UserCommand(
                userResource.getUsername()
        );
    }
}
