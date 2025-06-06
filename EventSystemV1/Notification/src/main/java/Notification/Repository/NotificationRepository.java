package notification.repository;

import notification.entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {

    Notification findByNotificationId(int notificationId);

    @Query("SELECT n.notificationId FROM Notification n")
    List<Integer> findAllNotificationIds();

    List<Notification> findAll();
    
}
