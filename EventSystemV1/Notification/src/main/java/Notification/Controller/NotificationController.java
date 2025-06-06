package notification.controller;

import notification.repository.NotificationRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequestMapping("/notification")
public class NotificationController {

    private NotificationRepository notificationRepository;
    
    public NotificationController(NotificationRepository notificationRepository)
    {
        this.notificationRepository = notificationRepository;
    }

    @PostMapping("/create")
    @ResponseBody
    public Notification create(@RequestBody Notification notification)
    {
        return notificationRepository.save(notification);
    }

    @GetMapping("/findAllNotificationIds")
    @ResponseBody
    public List<Integer> findAllNotificationIds()
    {
        return notificationRepository.findAllNotificationIds();
    }

    @GetMapping("/findByNotificationId")
    @ResponseBody
    public Notification findByNotificationId(@RequestParam int notificationId)
    {
        return notificationRepository.findByNotificationId(notificationId);
    }

    @GetMapping("/findAllNotifications")
    @ResponseBody
    public List<Notification> findAllNotifications()
    {
        return notificationRepository.findAll();
    }

    @DeleteMapping("/deleteNotification")
    @ResponseBody
    public void deleteNotification(@RequestParam int notificationId)
    {
        Notification notification = notificationRepository.findByNotificationId(notificationId);

        notificationRepository.delete(notification);
    }
}
