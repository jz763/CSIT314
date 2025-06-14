package CSIT314.EventSystemV1.application.commandservices;

import CSIT314.EventSystemV1.domain.model.entities.UserAttendee;
import CSIT314.EventSystemV1.domain.model.valueobjects.UserId;
import CSIT314.EventSystemV1.domain.model.valueobjects.Username;
import CSIT314.EventSystemV1.domain.model.commands.UserCommand;
import CSIT314.EventSystemV1.infrastructure.repositories.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.IllegalArgumentException;


@Service
public class UserCommandService {

    private final UserRepository userRepository;

    public UserCommandService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public UserId registerUser(UserCommand userCommand) {
        UserAttendee user = new UserAttendee(userCommand);

        userRepository.save(user);

        return user.getUserId();
    }

    @Transactional
    public void deleteUser(UserId userId) {
        UserAttendee user = userRepository.findByUserId(userId);
        if (user == null) {
            throw new IllegalArgumentException("User not found");
        }

        userRepository.delete(user);
    }
}
