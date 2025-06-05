import React, { useState } from "react";
import { Footer } from "../../assets/Components/Footer";
import { Navbar } from "../../assets/Components/Navbar";
import { EventCards } from "../../assets/Components/EventCards";
import "./SearchResults.css";

import resetsvg from "../../assets/Images/refresh-double.svg";

export const SearchResults = () => {
  // State for Category checkboxes (five “Genre” items)
  const [categorySelections, setCategorySelections] = useState(
    Array.from({ length: 5 }, () => false)
  );

  // State for Date checkboxes
  const [dateSelections, setDateSelections] = useState({
    today: false,
    tomorrow: false,
    thisWeekend: false,
    thisWeek: false,
    nextWeek: false,
  });

  // State for Price checkboxes
  const [priceSelections, setPriceSelections] = useState({
    paid: false,
    free: false,
  });

  // Toggle handlers for Category (indexed 0–4)
  const handleCategoryChange = (index: number) => {
    setCategorySelections((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  // Toggle handlers for Date
  const handleDateChange = (field: keyof typeof dateSelections) => {
    setDateSelections((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // Toggle handlers for Price
  const handlePriceChange = (field: keyof typeof priceSelections) => {
    setPriceSelections((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // Reset all filters (Category, Date, Price)
  const handleReset = () => {
    setCategorySelections(Array.from({ length: 5 }, () => false));
    setDateSelections({
      today: false,
      tomorrow: false,
      thisWeekend: false,
      thisWeek: false,
      nextWeek: false,
    });
    setPriceSelections({
      paid: false,
      free: false,
    });
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <div className="text-[64px] text-[#FFF] pt-[200px] pl-[50px]">
        Search Results for, <span></span>
      </div>

      <div className="pt-[100px] flex space-x-6 pr-[50px]">
        {/*Filters Container */}
        <div
          className="
            w-[211px]
            h-[800px]
            rounded-tl-[0px]
            rounded-tr-[20px]
            rounded-br-[20px]
            rounded-bl-[0px]
            bg-[rgba(85,85,85,0.07)]
            shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),_45.5px_-45.5px_45.5px_0px_rgba(64,64,64,0.07)_inset,_-45.5px_45.5px_45.5px_0px_rgba(255,255,255,0.07)_inset]
            backdrop-blur-[31.395000457763672px]
            p-4
          "
        >
          {/* Filters Header + Reset Button */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white text-[24px] font-semibold">Filters</h2>
            <button
              onClick={handleReset}
              className="
                w-[24px]
                h-[24px]
                flex items-center justify-center
                hover:opacity-80
              "
              aria-label="Reset filters"
            >
              <img src={resetsvg} className="w-full h-full" alt="Reset" />
            </button>
          </div>
          {/* Genre Section - Filters */}
          <div className="mb-8">
            <h3 className="text-white text-[20px] font-medium mb-3">
              Category
            </h3>
            <div className="space-y-3">
              {categorySelections.map((checked, idx) => (
                <label key={idx} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleCategoryChange(idx)}
                    className="mr-2 w-[16px] h-[16px] text-blue-500 focus:ring-blue-400"
                  />
                  <span className="text-white text-[16px]">Genre</span>
                </label>
              ))}

              <button className="mt-2 text-[14px] text-blue-300 hover:underline">
                View more
              </button>
            </div>
          </div>
          {/* Date Section - Filters */} {/* Price Section - Filters */}
          <div className="mb-8">
            <h3 className="text-white text-[20px] font-medium mb-3">Date</h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dateSelections.today}
                  onChange={() => handleDateChange("today")}
                  className="mr-2 w-[16px] h-[16px] text-blue-500 focus:ring-blue-400"
                />
                <span className="text-white text-[16px]">Today</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dateSelections.tomorrow}
                  onChange={() => handleDateChange("tomorrow")}
                  className="mr-2 w-[16px] h-[16px] text-blue-500 focus:ring-blue-400"
                />
                <span className="text-white text-[16px]">Tomorrow</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dateSelections.thisWeekend}
                  onChange={() => handleDateChange("thisWeekend")}
                  className="mr-2 w-[16px] h-[16px] text-blue-500 focus:ring-blue-400"
                />
                <span className="text-white text-[16px]">This Weekend</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dateSelections.thisWeek}
                  onChange={() => handleDateChange("thisWeek")}
                  className="mr-2 w-[16px] h-[16px] text-blue-500 focus:ring-blue-400"
                />
                <span className="text-white text-[16px]">This Week</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dateSelections.nextWeek}
                  onChange={() => handleDateChange("nextWeek")}
                  className="mr-2 w-[16px] h-[16px] text-blue-500 focus:ring-blue-400"
                />
                <span className="text-white text-[16px]">Next Week</span>
              </label>

              <button className="mt-2 text-[14px] text-blue-300 hover:underline">
                View more
              </button>
            </div>
          </div>
          {/* Price Section - Filters */}
          <div>
            <h3 className="text-white text-[20px] font-medium mb-3">Price</h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={priceSelections.paid}
                  onChange={() => handlePriceChange("paid")}
                  className="mr-2 w-[16px] h-[16px] text-blue-500 focus:ring-blue-400"
                />
                <span className="text-white text-[16px]">Paid</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={priceSelections.free}
                  onChange={() => handlePriceChange("free")}
                  className="mr-2 w-[16px] h-[16px] text-blue-500 focus:ring-blue-400"
                />
                <span className="text-white text-[16px]">Free</span>
              </label>
            </div>
          </div>
        </div>

        {/* Search Result Pane To The Right Of Filters */}
        <div
          className="
            w-full
            h-[1129px]
            rounded-[20px]
            bg-[rgba(85,85,85,0.07)]
            shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),_45.5px_-45.5px_45.5px_0px_rgba(64,64,64,0.07)_inset,_-45.5px_45.5px_45.5px_0px_rgba(255,255,255,0.07)_inset]
            backdrop-blur-[31.395000457763672px]
          "
        >
          <div className="space-y-4">
            <EventCards />
            <EventCards />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
