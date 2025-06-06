import { Link } from "react-router";
import { OrgNavbar } from "../../assets/Components/OrgNavbar";

export const OrgSignup = () => {
    <OrgNavbar/>
    return(
        <div className = "bg-[#1d1c1c] min-h-screen">
            <div className = "flex h-screen justify-center items-center">
                <form action = "/createOrganiser" className = "text-white">
                    <label htmlFor = "userName">Enter Organisation Username:</label><br/>
                    <input type = "text" id = "userName" name = "userName" className = "border-1 rounded-sm"/><br/>
                
                    <label htmlFor = "orgName">Enter Organisation Name:</label><br/>
                    <input type = "text" id = "orgName" name = "orgName" className = "border-1 rounded-sm"/><br/>

                    <label htmlFor = "password">Enter Password:</label><br/>
                    <input type = "password" id = "password" name = "password" className = "border-1 rounded-sm"/><br/><br/>

                    <input type = "Submit" value = "Register" className = "bg-neutral-300 text-black border-1 rounded-xl w-[100px] h-[40px] hover:bg-neutral-400"/>
                </form>
            </div>
        </div>
    );
};