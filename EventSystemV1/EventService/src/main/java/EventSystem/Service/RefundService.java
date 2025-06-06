package EventSystem.Service;

import EventSystem.Entity.Refund;
import EventSystem.Repository.RefundRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RefundService {
    private final RefundRepo refundRepo;

    @Autowired
    public RefundService(RefundRepo newRefundRepo){
        this.refundRepo = newRefundRepo;
    }

    //Crud functions

    //Create refund
    public Refund saveNewRefund(Refund refundToBeSaved){
        return refundRepo.save(refundToBeSaved);
    }

    //read all refunds
    public List<Refund> getAllRefunds(){
        return refundRepo.findAll();
    }

    //read specific refund
    public Optional<Refund> findRefund(Long refundToBeFound){
        return refundRepo.findById(refundToBeFound);
    }

    //update refund
    public Refund updateRefund(Long refundUpdateId, Refund updatedRefund){
        Optional<Refund> refundToBeUpdated = refundRepo.findById(refundUpdateId);
        if (refundToBeUpdated.isPresent()){
            Refund updatedToBeSaved = refundToBeUpdated.get();
            updatedToBeSaved.setRefundAmount(updatedRefund.getRefundAmount());
            updatedToBeSaved.setEventId(updatedRefund.getEventId());
            updatedToBeSaved.setPaymentId(updatedRefund.getPaymentId());
            updatedToBeSaved.setUserDetails(updatedRefund.getUserDetails());
            return refundRepo.save(updatedToBeSaved);
        } else {
            throw new RuntimeException("Could not find refund");
        }
    }

    //Delete refund
    public void removeRefund(Long removeRefundId){
        refundRepo.deleteById(removeRefundId);
    }

}
