import { Link } from "react-router";
import mail_icon from "../../assets/images/mail.png";
import lock_icon from "../../assets/images/lock.png";
import person_icon from "../../assets/images/person-sharp.png";
import contactadd_icon from "../../assets/images/phone-add.png";
import event_img from "../../assets/images/eventsBWimage.jpg";

export const Signup = () => {
  return (
    <div className="bg-[linear-gradient(128deg,_#dfdfdf_11.38%,_#000_87.48%)] min-h-screen ">
      <div className="text-center text-white pb-15 pt-10">
        <h1 className="text-[64px] font-bold mb-0 leading-none">Eventide</h1>
        <h2 className="text-[20px] font-normal mt-1 leading-none">
          Local Event Finder <br />
          and Planner
        </h2>
      </div>

      <div className="flex justify-center items-center">
        <img
          className="h-[578px] w-[378px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          src={event_img}
          alt="side visual"
        />

        <div
          className="
            w-[400px]
            h-[434px]                /* increased height for 4 inputs */
            rounded-none
            rounded-tr-[20px]
            rounded-br-[20px]
            bg-[rgba(217,217,217,0.2)]
            shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),_24.533px_-24.533px_24.533px_0px_rgba(165,165,165,0.2)_inset,_-24.533px_24.533px_24.533px_0px_rgba(255,255,255,0.2)_inset]
            p-6
          "
        >
          <div className="flex flex-col pt-5">
            <div className="text-[36px] text-center font-bold">Sign Up</div>
          </div>

          <div className="flex flex-col space-y-6 pt-5">
            <div className="flex items-center justify-between border-b border-[#434343] w-[350px] mx-auto">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="flex-1 bg-transparent outline-none placeholder-[#353535]"
              />
              <img src={person_icon} alt="person icon" className="ml-2" />
            </div>

            <div className="flex items-center justify-between border-b border-[#434343] w-[350px] mx-auto">
              <input
                type="email"
                placeholder="Email"
                required
                className="flex-1 bg-transparent outline-none placeholder-[#353535]"
              />
              <img src={mail_icon} alt="mail icon" className="ml-2" />
            </div>

            <div className="flex items-center justify-between border-b border-[#434343] w-[350px] mx-auto">
              <input
                type="password"
                placeholder="Password"
                required
                className="flex-1 bg-transparent outline-none placeholder-[#353535]"
              />
              <img src={lock_icon} alt="lock icon" className="ml-2" />
            </div>

            <div className="flex items-center justify-between border-b border-[#434343] w-[350px] mx-auto">
              <input
                type="text"
                placeholder="Contact Number"
                required
                className="flex-1 bg-transparent outline-none placeholder-[#353535]"
              />
              <img src={contactadd_icon} alt="contact icon" className="ml-2" />
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
              Sign Up
            </button>
          </div>

          <div className="flex justify-between w-full max-w-[299px] text-[10px] mt-[37px] mx-auto">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
            <Link to="/">
              <a className="hover:underline">Already Have an Account?</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
