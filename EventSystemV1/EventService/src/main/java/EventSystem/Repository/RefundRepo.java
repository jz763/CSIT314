package EventSystem.Repository;

import EventSystem.Entity.Refund;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RefundRepo  extends JpaRepository<Refund, Long> {
}
