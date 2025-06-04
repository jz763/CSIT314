import { useState } from "react"
import EventData from "../../Type/EventEntity"
import EventService from "../../Services/EventService";
import EventCard from "./EventCard";

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
                    <EventCard eventName={event.eventEntityName}></EventCard>
                ))}
            </div>
        </>
    )
}

export default EventList;