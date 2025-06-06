import { Link } from "react-router";
import "./OrgSignup.css"

export const OrgSignup = () => {
    return(
        <div>
            <form action = "/createOrganiser">
                <label htmlFor = "name" className = "text-white">Enter Username:</label>
                <input type = "text" id = "name" name = "name"/><br/>
            
            </form>
        </div>
    );
};