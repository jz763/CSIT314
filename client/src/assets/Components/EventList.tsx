import { useState } from "react"
import EventData from "../../Type/EventEntity"
import EventService from "../../Services/EventService";
import { EventCards } from "./EventCards";


const EventList: React.FC = () =>{
    const[event, setEvents] = useState<Array<EventData>>([]);
    const getEvents = () =>{
        EventService.getAllEvents().then((Response:any) =>{
            setEvents(Response.data);
        });
       
    }
    return(
        <>
            <div>
                {/* Need event component*/}
                {event && event.map((event) =>(
                    <></>
                ))}
                <EventCards></EventCards>
            </div>
        </>
    )
}

export default EventList;