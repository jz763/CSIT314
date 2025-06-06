package CSIT314.EventSystemV1.application.queryservices;

import CSIT314.EventSystemV1.domain.model.entities.UserAttendee;
import CSIT314.EventSystemV1.domain.model.valueobjects.UserId;
import CSIT314.EventSystemV1.domain.model.valueobjects.Username;
import CSIT314.EventSystemV1.infrastructure.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserQueryService {

    private UserRepository userRepository;

    public UserQueryService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserAttendee> findAll() {
        return userRepository.findAll();
    }

    public UserAttendee findById(UserId userId) {
        return userRepository.findByUserId(userId);
    }

    public List<UserId> findAllUserIds()
    {
        return userRepository.findAllUserIds();
    }

    public UserAttendee findByUserName(Username userName) {
        return userRepository.findByUsername(userName);
    }
}
