package EventSystem.Service;


import EventSystem.Entity.Payment;
import EventSystem.Repository.PaymentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {
    private final PaymentRepo paymentRepo;

    @Autowired
    public PaymentService(PaymentRepo newPaymentRepo){
        this.paymentRepo = newPaymentRepo;
    }

    //Crud functions

    //Create new payment
    public Payment saveNewPayment(Payment newPayment){
        return paymentRepo.save(newPayment);
    }

    //Read all payments
    public List<Payment> getAllPayments(){
        return paymentRepo.findAll();
    }

    //Read specific payment
    public Optional<Payment> getPayment(Long findPaymentid){
        return paymentRepo.findById(findPaymentid);
    }

    //Update specific payments
    public Payment updatePayment(Long updatePaymentId, Payment updatedPayment){
        Optional<Payment> paymentToBeUpdated = paymentRepo.findById(updatePaymentId);
        if (paymentToBeUpdated.isPresent()){
            Payment tempPayment =paymentToBeUpdated.get();
            tempPayment.setUserDetails(updatedPayment.getUserDetails());
            tempPayment.setPaymentAmount(updatedPayment.getPaymentAmount());
            return paymentRepo.save(tempPayment);
        } else {
            throw new RuntimeException("Could not find payment to be updated");
        }
    }

    //Delete specific payments
    public void removePayment(Long removePaymentId){
        paymentRepo.deleteById(removePaymentId);
    }
}
