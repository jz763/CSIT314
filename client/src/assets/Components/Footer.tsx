import logo from "../Images/logo.png";
import SM from "../Images/SM.png";

export const Footer = () => {
  return (
    <div className="mt-[100px] w-full h-[308px] bg-[#1D1C1C] flex items-start px-[118px] pt-[70px]">
      <div>
        <img className="h-[150px]" src={logo} alt="Logo" />
      </div>
      <div className="ml-auto pt-[45px] flex flex-col items-end space-y-4">
        <div className="flex space-x-8">
          <a className="text-white text-[25px]" href="">
            Support
          </a>
          <a className="text-white text-[25px]" href="">
            Cookies
          </a>
          <a className="text-white text-[25px]" href="">
            Privacy Policy
          </a>
          <a className="text-white text-[25px]" href="">
            Terms &amp; Condition
          </a>
        </div>
        <img className="h-[28px]" src={SM} alt="Social Media" />
      </div>
    </div>
  );
};
