import httpCommon from "../http-common"
import TicketData from "../Type/TicketEntity"

//Create ticket 
const createTicket = (data: TicketData) =>{
    return httpCommon.post<TicketData>("/createTicket", data);
}

//Read all tickets
const getAllTickets = () =>{
    return httpCommon.get<Array<TicketData>>("/getAllTickets");
}

//Read specific ticket 
const getTicket = (id: any) =>{
    return httpCommon.get<TicketData>("/getTicketById/${id}");
}

//Update ticket 
const updateTicket = (id: any, data: TicketData) =>{
    return httpCommon.put<any>("/updateTicket/${id}", data);
}

//Delete ticket 
const deleteTicket = (id: any) =>{
    return httpCommon.delete<any>("/deleteTicket/${id}");
}

const TicketService = {
    getAllTickets,
    getTicket,
    createTicket,
    updateTicket,
    deleteTicket
}

export default TicketService;