import "../Cards/CardStyles.css"

interface ContactCardProps{
    contactInfo: string;
    contactEmail:string;
}


function ContactCard({contactInfo, contactEmail} : ContactCardProps){
    return(
        <>
            <div className = "card-contact">
                <h1>Contact Information</h1>
                <p>Contact number</p>
                <p>{contactInfo}</p>
                <p>Contact email</p>
                <p>{contactEmail}</p>
            </div>
        </>
    )
}

export default ContactCard;