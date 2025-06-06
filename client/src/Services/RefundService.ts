import httpCommon from "../http-common"
import RefundData from "../Type/RefundEntity"


//Create refund 
const createRefund = (data: RefundData) =>{
    return httpCommon.post<RefundData>("/Event", data);
}

//Read all refunds
const getAllRefunds = () =>{
    return httpCommon.get<Array<RefundData>>("/getAllEvents");
}

//Read specific refund 
const getRefund = (id: any) =>{
    return httpCommon.get<RefundData>("/getEvent/${id}");
}

//Update refund 
const updateRefund = (id: any, data: RefundData) =>{
    return httpCommon.put<any>("/updateRefund/${id}", data);
}

//Delete refund 
const deleteRefund = (id: any) =>{
    return httpCommon.delete<any>("/deleteRefund/${id}");
}

const RefundService = {
    getAllRefunds,
    getRefund,
    createRefund,
    updateRefund,
    deleteRefund
}

export default RefundService;