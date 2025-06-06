import httpCommon from "../http-common"
import ReportData from "../Type/ReportEntity"

//Create report 
const createReport = (data: ReportData) =>{
    return httpCommon.post<ReportData>("/Report", data);
}

//Read all reports
const getAllReports = () =>{
    return httpCommon.get<Array<ReportData>>("/getAllReports");
}

//Read specific report 
const getReport = (id: any) =>{
    return httpCommon.get<ReportData>("/getReport/${id}");
}

//Update report 
const updateReport = (id: any, data: ReportData) =>{
    return httpCommon.put<any>("/updateReport/${id}", data);
}

//Delete report 
const deleteReport = (id: any) =>{
    return httpCommon.delete<any>("/deleteReport/${id}");
}

const ReportService = {
    getAllReports,
    getReport,
    createReport,
    updateReport,
    deleteReport
}

export default ReportService;