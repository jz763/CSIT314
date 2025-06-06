package EventSystem.Controller;

import EventSystem.Entity.Payment;
import EventSystem.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/Payments")
public class PaymentController {
    private final PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService newPaymentService){
        this.paymentService = newPaymentService;
    }

    //Crud functions

    //Create payments
    @PostMapping("/savePayment")
    public ResponseEntity<Payment> saveNewPayment(@RequestBody Payment newPaymentToBeSaved){
        Payment savePayment = paymentService.saveNewPayment(newPaymentToBeSaved);
        return ResponseEntity.ok(savePayment);
    }

    //Read all payments
    @GetMapping("/getAllPayments")
    public ResponseEntity<List<Payment>> getALlPayments(){
        List<Payment> allPayments = paymentService.getAllPayments();
        return ResponseEntity.ok(allPayments);
    }

    public ResponseEntity<Payment> getPayment(@PathVariable Long findPaymentID){
        Optional<Payment> findPayment = paymentService.getPayment(findPaymentID);
        return findPayment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    //Update specific payment
    @PutMapping("/updatePayment/{updatePaymentId}")
    public ResponseEntity<Payment> updatePayment(@PathVariable Long updatePaymentId, @RequestBody Payment updatedPayment){
        Payment updatePayment = paymentService.updatePayment(updatePaymentId,updatedPayment);
        return ResponseEntity.ok(updatePayment);
    }

    //Delete payment
    public ResponseEntity<String> deletePayment(Long removePaymentId){
        paymentService.removePayment(removePaymentId);
        return ResponseEntity.ok("The event has been removed");
    }
}
