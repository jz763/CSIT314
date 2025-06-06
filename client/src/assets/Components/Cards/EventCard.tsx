import "../Cards/CardStyles.css"

interface EventCardProps{
    eventName:string;
    eventDate:string;
    eventTime:string;
    eventLoaction:string;
    eventHost:string;
}

function EventCard({eventName, eventDate, eventTime, eventLoaction, eventHost}: EventCardProps){
    return(
        <>
            <div className = "card-event">
                <title>{eventName}</title>
                <h1>Event Description</h1>
                <p>event details</p>
                <h2>Date and Time</h2>
                <h3>{eventDate} {eventTime}</h3>
                <h2>Hosted by</h2>
                <h3>{eventHost}</h3>
                <h2>Event Location</h2>
                <h3>{eventLoaction}</h3>
            </div>
        </>
    )
}

export default EventCard