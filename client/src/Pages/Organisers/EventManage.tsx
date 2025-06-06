import { OrgNavbar } from "../../assets/Components/OrgNavbar"

export const EventManage = () => {
    const vip = ["alice", "steve", "fred", "c", "f", "w", "w", "x", "t", "i", "y", "u"];
    const standard = ["alice", "steve", "fred", "c", "f", "w", "w", "x", "t", "i", "y", "u"];

    return(
            <div className = "bg-[#1d1c1c] text-white">
                <OrgNavbar/>
                <h1>EventName</h1>
                <h2>VIP Attendees</h2>
                <div className = "h-[200px] w-[400px] overflow-y-auto border">
                    <table className = "border border-white w-[383px]">
                        {vip.map((text, index) => (
                            <tr key = {index} className = "border border-white">
                                <td>{text}</td>
                                <td><button onClick = {() => {standard.splice(index, 1)}} className = "border-white bg-white w-[30px] rounded-xl text-black text-3xl pr-1"><b>-</b></button></td>
                            </tr>
                        ))}
                    </table>
                </div>

                <h2>Standard Attendees</h2>
                <div className = "h-[200px] w-[400px] overflow-y-auto border">
                    <table className = "border border-white w-[383px]">
                        {standard.map((text, index) => (
                            <tr key = {index} className = "border border-white">
                                <td>{text}</td>
                                <td><button onClick = {() => {standard.splice(index, 1)}} className = "border-white bg-white w-[30px] rounded-xl text-black text-3xl pr-1"><b>-</b></button></td>
                            </tr>
                        ))}
                    </table>
                </div>
                
                <br/><br/>
                <button className = "bg-neutral-300 text-black border-1 rounded-xl w-[180px] h-[40px] hover:bg-neutral-400">Send Reminder</button>

                <br/><br/>
                <div className = "flex justify-center items-center">
                    <form>
                        <h1>Edit Details</h1><br/>
                        <h2>Name:</h2>
                        <input type="text" id = "name" className="w-[500px] border-1"/>
                        <h2>Description:</h2>
                        <textarea rows = {4} id = "description" className="w-[500px] border-1"/>
                        <h2>Time&Date:</h2>
                        <input type = "datetime-local" id = "date" className="border-1"></input>
                        <h2>Location:</h2>
                        <input type="text" id = "location" className="w-[500px] border-1"/>
                        <h2>Standard Price:</h2>
                        <span>$ </span><input type = "number" id = "basePrice" className="border-1"></input>
                        <h2>VIP Price:</h2>
                        <span>$ </span><input type = "number" id = "vipPrice" className="border-1"></input>
                        <br/><br/>

                        <input type = "Submit" value = "Submit" className = "bg-neutral-300 text-black border-1 rounded-xl w-[100px] h-[40px] hover:bg-neutral-400"/>
                    </form>
                </div>
            </div>
    )
}