import logo from "../Images/logo.png";


import bookmark_icon from "../Images/bookmark-empty.png";
import profile_pic from "../Images/Profile Pic.png";
import loc_icon from "../Images/location-sharp.png";
import search_icon from "../Images/search.png";

import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <header
      className="
        fixed top-0 left-0 w-full h-[110px]
        flex flex-nowrap items-center justify-between
        p-[23px]
        bg-[#1d1c1c] border border-black
        box-border
        z-1000000
        
      "
    >
      {/* Logo on the left */}
      <a href="/HomePage">
        <div className="flex items-center border-r border-white pr-[20px] mr-[20px]">
          <img
            src={logo}
            alt="Logo"
            className="w-[200px] h-[110px] object-contain"
          />
        </div>
      </a>

      {/* Middle “left-group” area (search + About Us) */}
      <div
        className="
          fixed ml-[272px]
          flex items-center gap-[30px] flex-shrink-0
        "
      >
        {/* Search box container */}
        <div
          className="
            flex items-center justify-start
            w-[482px] h-[42px]
            rounded-[20px] bg-white
            flex-shrink-0
          "
        >
          {/* “Search Events” field */}
          <div className="relative flex items-center pr-[50px] h-[20px] w-[235px] border-r-2 border-black">
            <input
              type="text"
              placeholder="Search Events"
              className="
                border-none bg-transparent
                pl-[10px] h-[90px]
                outline-none text-[#1d1c1c]
                placeholder:text-[15px]
              "
            />
            <img
              src={search_icon}
              alt="Search icon"
              className="absolute ml-[200px]"
            />
          </div>

          {/* “Location” field */}
          <div className="relative flex items-center ml-0">
            <input
              type="text"
              placeholder="Location"
              className="
                border-none bg-transparent
                ml-[10px] h-[90px]
                outline-none text-[#1d1c1c]
                placeholder:text-[15px]
              "
            />
            <img
              src={loc_icon}
              alt="Location icon"
              className="absolute ml-[210px]"
            />
          </div>
        </div>

        {/* “About Us” link */}
        <a
          href="/"
          className="text-white text-[24px] font-normal hover:underline"
        >

          About Us
        </a>
      </div>


      <div className={styles["user_bookmark"]}>
        <a href="/">
          <img src={bookmark_icon} />
        </a>
        <img src={profile_pic} />
      </div>
      {/* User & Bookmark on the right */}
      <div className="flex items-center justify-center">
        <a href="/">
          <img src={bookmark_icon} alt="Bookmark icon" />
        </a>
        <img src={profile_pic} alt="Profile picture" className="ml-[35px]" />

      </div>
    </header>
  );
};
