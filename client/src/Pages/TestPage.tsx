
import ContactCard from "../assets/Components/Cards/ContactCard"
import EventCard from "../assets/Components/Cards/EventCard"
import PriceCard from "../assets/Components/Cards/PriceCard"
import { EventCards } from "../assets/Components/EventCards"
import EventList from "../assets/Components/EventList"
import concertIMG from "../../src/assets/Images/concertIMG.png";
import "./TestPage.css"





function TestPage(){
    return(
        <>


            <div className = "container event-details">
                <div className = "row">
                    <img className="image-event-details" src={concertIMG} alt="Event"/>
                </div>
                <div className="row">
                    <div className = "col">
                        <EventCard eventName="" eventDate="" eventTime="" eventHost="" eventLoaction=""/>
                    </div>
                    <div className = "col">
                        <PriceCard tickectPrice={3}/>
                        <ContactCard contactEmail="" contactInfo=""></ContactCard>
                    </div>
                </div>
            </div>  


            <div>
                helllo
            </div>
            <title>
                Hello
            </title>
            <EventList></EventList>

        </>
    )
}
export default TestPage