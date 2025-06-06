import { Link } from "react-router"; // Import Link component for navigation

import mail_icon from "../../assets/images/mail.png"; // Import mail icon image
import lock_icon from "../../assets/images/lock.png"; // Import lock icon image
import event_img from "../../assets/images/eventsBWimage.jpg"; // Import side visual image

export const Login = () => {
  return (
    <div className="bg-[linear-gradient(128deg,_#dfdfdf_11.38%,_#000_87.48%)] min-h-screen">
      {/* Header section with title and subtitle */}
      <div className="text-center text-white pb-15 pt-10">
        {/* Main title */}
        <h1 className="text-[64px] font-bold mb-0 leading-none">Eventide</h1>
        {/* Subtitle */}
        <h2 className="text-[20px] font-normal mt-1 leading-none">
          Local Event Finder <br />
          and Planner
        </h2>
      </div>

      {/* Spacer div (can be removed if unused) */}
      <div />

      {/* Main content: image on the left, login form on the right */}
      <div className="flex justify-center items-center">
        {/* Side visual image */}
        <img
          className="h-[578px] w-[378px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          src={event_img}
          alt="side visual"
        />

        {/* Login form container */}
        <div
          className="
            w-[400px]                
            h-[355px]               
            rounded-none            
            rounded-tr-[20px]        
            rounded-br-[20px]        
            bg-[rgba(217,217,217,0.2)] 
            shadow-[               
              0px_4px_4px_0px_rgba(0,0,0,0.25),
              24.533px_-24.533px_24.533px_0px_rgba(165,165,165,0.2)_inset,
              -24.533px_24.533px_24.533px_0px_rgba(255,255,255,0.2)_inset
            ]
          "
        >
          {/* Title of the form */}
          <div className="flex flex-col pt-5">
            <div className="text-[36px] text-center font-bold">Login</div>
          </div>

          {/* Input fields container */}
          <div className="flex flex-col space-y-8">
            {/* Email input row */}
            <div className="pt-5 flex items-center justify-between border-b border-[#434343] w-[350px] mx-auto">
              <input
                type="email"
                placeholder="Email"
                required
                className="outline-none placeholder-[#353535]" // Remove outline and set placeholder color
              />
              <img src={mail_icon} alt="mail icon" className="ml-2" />{" "}
              {/* Mail icon */}
            </div>

            {/* Password input row */}
            <div className="flex items-center justify-between border-b border-[#434343] w-[350px] mx-auto">
              <input
                type="password"
                placeholder="Password"
                required
                className="flex-1 outline-none placeholder-[#353535]" // Expand to fill remaining space
              />
              <img src={lock_icon} alt="lock icon" className="ml-2" />{" "}
              {/* Lock icon */}
            </div>
          </div>

          {/* Login button */}
          <div className="flex justify-center pt-6">
            <button
              className="
                rounded-[30px]                                      
                border-[1px]                                       
                w-[296px]                                         
                h-[27px]                                          
                border-[#454545]                                   
                bg-[linear-gradient(90deg,_#989898_1.17%,_#5A5858_95.62%)] 
                shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]            
                text-[#D6D6D6]                                      
                font-medium                                   
              "
            >
              Login
            </button>
          </div>

          {/* Footer links: Forgot Password and Create Account */}
          <div className="flex justify-between w-full max-w-[299px] text-[10px] mt-[37px] mx-auto">
            <a href="#">Forgot Password?</a>{" "}
            {/* Placeholder link for forgot password */}
            <Link to="/Registration">
              {/* Using Link for client-side routing */}
              <a href="#">Create an Account</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
