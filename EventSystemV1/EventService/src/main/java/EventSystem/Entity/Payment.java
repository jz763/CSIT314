package EventSystem.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Payments")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long paymentId;

    @Column(nullable = false)
    private String userDetails;

    @Column
    private Long userId;

    @Column
    private Long eventId;

    @Column
    private Long TicketId;

    @Column(nullable = false)
    private Integer paymentAmount;

    public String getUserDetails(){
        return userDetails;
    }

    public Integer getPaymentAmount(){
        return paymentAmount;
    }

    public void setUserDetails(String newUserDetails){
        this.userDetails = newUserDetails;
    }

    public void setPaymentAmount(Integer newPaymentAmount){
        this.paymentAmount = newPaymentAmount;
    }
}
