import httpCommon from "../http-common"
import PaymentData from "../Type/PaymentEntity"


//Create payment 
const createPayment = (data: PaymentData) =>{
    return httpCommon.post<PaymentData>("/Payment", data);
}

//Read all payments
const getAllPayments = () =>{
    return httpCommon.get<Array<PaymentData>>("/getAllEvents");
}

//Read specific payment 
const getPayment = (id: any) =>{
    return httpCommon.get<PaymentData>("/getPayment/${id}");
}

//Update payment 
const updatePayment = (id: any, data: PaymentData) =>{
    return httpCommon.put<any>("/updatePayment/${id}", data);
}

//Delete payment 
const deletePayment = (id: any) =>{
    return httpCommon.delete<any>("/deletePayment/${id}");
}

const PaymentService = {
    getAllPayments,
    getPayment,
    createPayment,
    updatePayment,
    deletePayment
}

export default PaymentService;