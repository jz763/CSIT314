interface EventCardProps{
    eventName: string;
}


function EventCard({eventName} : EventCardProps){
    return(
        <>
            <div>
                <h1>{eventName}</h1>
            </div>
        </>
    )
}

export default EventCard;