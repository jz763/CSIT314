import React from "react";
import { Footer } from "../../assets/Components/Footer";
import { Navbar } from "../../assets/Components/Navbar";
import { NotificationCard } from "../../assets/Components/NotificationCard";

import "./HomePage.css";

export const NotificationPage = () => {
  return (
    <div className="relative bg-black min-h-screen">
      <div className="mt-[110px]">
        <div className="text-[50px] text-white pt-[64px] pl-[40px]">
          Notifications
        </div>
        <div className="mt-5 space-y-10">
          <NotificationCard />
          <NotificationCard />
        </div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};
