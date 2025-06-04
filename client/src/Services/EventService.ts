import httpCommon from "../http-common"
import EventData from "../Type/EventEntity"

//Create event 
//Read all events / read specific event 
//Update event 
//Delete Event 

//Create event 
const createEvent = (data: EventData) =>{
    return httpCommon.post<EventData>("/Event", data);
}

//Read all events
const getAllEvents = () =>{
    return httpCommon.get<Array<EventData>>("/getAllEvents");
}

//Read specific event 
const getEvent = (id: any) =>{
    return httpCommon.get<EventData>("/getEvent/${id}");
}

//Update event 
const updateEvent = (id: any, data: EventData) =>{
    return httpCommon.put<any>("/updateEvent/${id}", data);
}

//Delete event 
const deleteEvent = (id: any) =>{
    return httpCommon.delete<any>("/deleteEvent/${id}");
}

const EventService = {
    getAllEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}

export default EventService;