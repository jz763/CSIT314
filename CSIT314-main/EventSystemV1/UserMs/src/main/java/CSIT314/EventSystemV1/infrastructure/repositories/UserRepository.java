package CSIT314.EventSystemV1.infrastructure.repositories;

import CSIT314.EventSystemV1.domain.model.entities.UserAttendee;
import CSIT314.EventSystemV1.domain.model.valueobjects.UserId;
import CSIT314.EventSystemV1.domain.model.valueobjects.Username;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<UserAttendee, Long> {

    UserAttendee findByUserId(UserId userId);

    @Query("SELECT u.userId FROM UserAttendee u")
    List<UserId> findAllUserIds();

    UserAttendee findByUsername(Username username);

    List<UserAttendee> findAll();

}
