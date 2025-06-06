import httpCommon from "../http-common"
import EventOrganiserData from "../Type/EventOrganiserEntity"


//Create EventOrganiser 
const createEventOrganiser = (data: EventOrganiserData) =>{
    return httpCommon.post<EventOrganiserData>("/createEventOrganiser", data);
}

//Read all EventOrganiser
const getAllEventOrganisers = () =>{
    return httpCommon.get<Array<EventOrganiserData>>("/getAllEventOrganisers");
}

//Read specific EventOrganiser 
const getEventOrganiser = (id: any) =>{
    return httpCommon.get<EventOrganiserData>("/getUserAttendeeById/${id}");
}

//Update EventOrganiser 
const updateEventOrganiser = (id: any, data: EventOrganiserData) =>{
    return httpCommon.put<any>("/updateEventOrganiser/${id}", data);
}

//Delete EventOrganiser 
const deleteEventOrganiser = (id: any) =>{
    return httpCommon.delete<any>("/deleteEventOrganiser/${id}");
}

const EventOrganiserService = {
    getAllEventOrganisers,
    getEventOrganiser,
    createEventOrganiser,
    updateEventOrganiser,
    deleteEventOrganiser
}

export default EventOrganiserService;