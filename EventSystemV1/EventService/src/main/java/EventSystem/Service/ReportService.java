package EventSystem.Service;


import EventSystem.Entity.Report;
import EventSystem.Repository.ReportRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReportService {
    private final ReportRepo reportRepo;

    @Autowired
    public ReportService(ReportRepo newReportRepo){
        this.reportRepo = newReportRepo;
    }

    //Crud functions


    //create
    public Report saveNewReport(Report newReportToBeSaved){
        return reportRepo.save(newReportToBeSaved);
    }

    //Read all reports
    public List<Report> getAllReports(){
        return reportRepo.findAll();
    }

    //Read specific reports
    public Optional<Report> findReport(Long findReportId){
        return reportRepo.findById(findReportId);
    }

    //Update specific report
    public Report updateReport(Long updateReportId, Report updatedReport){
        Optional<Report> updateReport = reportRepo.findById(updateReportId);
        if (updateReport.isPresent()){
            Report updatedreportToSave = updateReport.get();
            updatedreportToSave.setEventId(updatedReport.getEventId());
            updatedreportToSave.setEventAttendee(updatedReport.getEventAttendee());
            updatedreportToSave.setEventTickets(updatedReport.getEventTickets());
            return reportRepo.save(updatedreportToSave);
        } else {
            throw new RuntimeException("Could not find report");
        }
    }

    //Delete report
    public void removeReport(Long removeReportId){
        reportRepo.deleteById(removeReportId);
    }
}
