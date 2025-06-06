package EventSystem.Controller;


import EventSystem.Entity.Refund;
import EventSystem.Service.RefundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/Refunds")
public class RefundController {
    private final RefundService refundService;

    @Autowired
    public RefundController(RefundService newRefundService){
        this.refundService = newRefundService;
    }

    //Crud functions

    //create controller
    @PostMapping("/saveRefund")
    public ResponseEntity<Refund> saveNewRefund(@RequestBody Refund newRefund){
        Refund saveRefund = refundService.saveNewRefund(newRefund);
        return ResponseEntity.ok(saveRefund);
    }

    //read all controller
    @GetMapping("/getAllRefunds")
    public ResponseEntity<List<Refund>> getAllRefunds(){
        List<Refund> allRefunds = refundService.getAllRefunds();
        return ResponseEntity.ok(allRefunds);
    }

    //read specific controller
    @GetMapping("/getRefund/{findRefundId}")
    public ResponseEntity<Refund> getRefund(@PathVariable Long findRefundId){
        Optional<Refund> findRefund = refundService.findRefund(findRefundId);
        return findRefund.map(ResponseEntity::ok).orElseGet(()->ResponseEntity.notFound().build());
    }

    //update controller
    @PutMapping("/updateRefund/{updateRefundId}")
    public ResponseEntity<Refund> updateRefund(@PathVariable Long updateRefundId,@RequestBody Refund updatedRefund){
        Refund refundToUpdate = refundService.updateRefund(updateRefundId,updatedRefund);
        return ResponseEntity.ok(refundToUpdate);
    }

    //delete controller
    @DeleteMapping("/removeRefund/{removeRefundId}")
    public ResponseEntity<String> removeRefund(@PathVariable Long removeRefundId){
        refundService.removeRefund(removeRefundId);
        return ResponseEntity.ok("The refund has been removed");
    }
}
