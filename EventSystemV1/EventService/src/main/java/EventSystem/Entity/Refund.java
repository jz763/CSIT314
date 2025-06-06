package EventSystem.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Refunds")
public class Refund {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long refundId;

    @Column(nullable = false)
    private String userDetails;

    @Column(nullable = false)
    private String eventId;


    @Column(nullable = false)
    private Integer refundAmount;

    @Column
    private String paymentId;

    public String getUserDetails(){
        return userDetails;
    }

    public String getEventId(){
        return eventId;
    }

    public Integer getRefundAmount(){
        return refundAmount;
    }

    public String getPaymentId(){
        return paymentId;
    }

    public void setUserDetails(String newUserDetails){
        this.userDetails = newUserDetails;
    }

    public void setEventId(String eventId) {
        this.eventId = eventId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }

    public void setRefundAmount(Integer newRefundAmount){
        this.refundAmount = newRefundAmount;
    }
}
