import React, { useState } from "react";
import logo from "../Images/logo.png";
import bookmark_icon from "../Images/bookmark-empty.png";
import profile_pic from "../Images/Profile Pic.png";
import loc_icon from "../Images/location-sharp.png";
import search_icon from "../Images/search.png";
import notbell from "../Images/notification-bell.svg";

export const Navbar = () => {
  // State to track whether the profile dropdown is visible
  const [showProfileMenu, setShowProfileMenu] = useState(false);

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

      {/* User & Bookmark on the right */}
      <div className="flex items-center justify-center">
        {/* Notification Icon */}
        <a className="pr-[35px]" href="/Notifications">
          <img src={notbell} />
        </a>
        {/* Bookmark icon */}
        <a href="/">
          <img src={bookmark_icon} alt="Bookmark icon" />
        </a>

        {/* Profile icon + dropdown */}
        <div className="ml-[35px] relative">
          {/* Clicking this button toggles the dropdown */}
          <button
            onClick={() => setShowProfileMenu((prev) => !prev)}
            className="focus:outline-none"
          >
            <img
              src={profile_pic}
              alt="Profile picture"
              className="w-[80px] h-[80px] rounded-full cursor-pointer"
            />
          </button>

          {/* Dropdown menu */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-[150px] bg-white rounded-lg shadow-lg z-50">
              {/* You can replace href="/logout" with your logout handler */}
              <a
                href="/"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Log Out
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
