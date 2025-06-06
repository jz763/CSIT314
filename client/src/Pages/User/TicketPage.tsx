import React from "react";

import { Footer } from "../../assets/Components/Footer";
import { Navbar } from "../../assets/Components/Navbar";
import { Ticket } from "../../assets/Components/Ticket";

export const TicketPage = () => {
  return (
    <div className="bg-[#1d1c1c] min-h-screen">
      <div className="flex justify-center items-center text-[50px] text-white font-bold mt-[110px]">
        <div className="mt-10">Your Tickets</div>
      </div>
      <div className="flex justify-center items-center pt-10">
        <Ticket />
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};
