import { Link } from "react-router";
import "./Login.css";

import mail_icon from "../assets/images/mail.png";
import lock_icon from "../assets/images/lock.png";
import event_img from "../assets/images/eventsBWimage.jpg";

export const Login = () => {
  return (
    <div>
      <div className="text-center text-white pb-15 pt-10">
        <h1 className="text-[64px] font-bold mb-0 leading-none ">Eventide</h1>
        <h2 className="text-[20px] font-normal mt-1 leading-none">
          Local Event Finder <br />
          and Planner
        </h2>
      </div>
      <div />
      <div className="flex justify-center items-center">
        <img
          className="h-[578px] w-[378px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          src={event_img}
          alt="side visual"
        />
        <div
          className="w-[400px] h-[355px]  
        /* 1. Radius */
          rounded-none
          rounded-tr-[20px]
          rounded-br-[20px]

          /* 2. Background */
          bg-[rgba(217,217,217,0.2)]

          /* 3. Box-shadow */
          shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),_24.533px_-24.533px_24.533px_0px_rgba(165,165,165,0.2)_inset,_-24.533px_24.533px_24.533px_0px_rgba(255,255,255,0.2)_inset]
        "
        >
          <div className="flex flex-col pt-5">
            <div className="text-[36px] text-center font-bold">Login</div>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="pt-5 flex items-center justify-between border-b border-[#434343] w-[350px] mx-auto">
              <input
                type="email"
                placeholder="Email"
                required
                className="outline-none placeholder-[#353535]"
              />
              <img src={mail_icon} alt="mail icon" className="ml-2" />
            </div>

            <div className="flex items-center justify-between border-b border-[#434343] w-[350px] mx-auto">
              <input
                type="password"
                placeholder="Password"
                required
                className="flex-1 outline-none placeholder-[#353535]"
              />
              <img src={lock_icon} alt="lock icon" className="ml-2" />
            </div>
          </div>

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

          <div className="flex justify-between w-full max-w-[299px] text-[10px] mt-[37px] mx-auto">
            <a href="#">Forgot Password?</a>
            <Link to="/Registration">
              <a href="#">Create an Account</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
