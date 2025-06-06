import React, { useState } from "react";
import concertIMG from "../Images/concertIMG.png";
import bookmarkEmpty from "../Images/Bookmark Non-Fill.svg";
import bookmarkFilled from "../Images/Bookmark Fill.svg";

export const EventCards = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmarkToggle = () => {
    setBookmarked((prev) => !prev);
  };

  return (
    <div className="relative w-100 h-100 bg-white rounded-[20px]  ">
      {/* Event Image */}
      <div>
        <img
          className="w-full rounded-tl-[20px] rounded-tr-[20px]"
          src={concertIMG}
          alt="Event"
        />
      </div>

      {/* Event Details */}
      <div className="text-center pt-[10px]">
        <div className="text-[30px] font-bold">Event Title</div>
        <div className="text-[20px]">Date/Time</div>
        <div className="text-[20px]">Address</div>
        <div className="text-[20px]">Price</div>
        <div className="text-[20px]">Organizer Name</div>
      </div>

      {/* Bookmark Button (bottom-right) */}
      <button
        onClick={handleBookmarkToggle}
        className="
          absolute
          bottom-[12px]
          right-[12px]
          w-[40px]
          h-[40px]
          p-[4px]
          bg-white
          rounded-full
          flex items-center justify-center
          hover:bg-gray-100
        "
      >
        <img
          src={bookmarked ? bookmarkFilled : bookmarkEmpty}
          alt={bookmarked ? "Bookmarked" : "Bookmark"}
          className="w-full h-full"
        />
      </button>
    </div>
  );
};
