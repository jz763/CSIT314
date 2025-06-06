package ticket.repository;

import ticket.entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

    Ticket findByNotificationId(int ticketId);

    @Query("SELECT t.ticketId FROM Ticket t")
    List<Integer> findAllNotificationIds();

    List<Ticket> findAll();
    
}
