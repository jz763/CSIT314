import "../Cards/CardStyles.css"

interface PriceCardProps{
    tickectPrice:number;
}


function PriceCard({tickectPrice}: PriceCardProps){
    return(
        <>
            <div className = "card-price">
                <h1>Price</h1>
                <h2>{tickectPrice}</h2>
            </div>
        </>
    )
}

export default PriceCard;