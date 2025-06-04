import React, { useState } from "react";

export const PaymentPage: React.FC = () => {
  // State for ticket type selection
  const [ticketType, setTicketType] = useState<"Normal" | "VIP">("Normal");

  // Placeholder prices
  const prices = {
    Normal: "A$45.00",
    VIP: "A$85.00",
  };

  // Placeholder date/time
  const eventDate = "September 11th, 2001";

  // Handler for ticket type change
  const handleTicketTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTicketType(e.target.value as "Normal" | "VIP");
  };

  // Placeholder handlers
  const handleBack = () => {
    console.log("Back arrow clicked");
  };
  const handleCheckout = () => {
    console.log("Checkout clicked");
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      {/* Container */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left: Billing & Credit Card Form */}
        <div className="w-full lg:w-2/3 p-8 space-y-6">
          {/* Header with Back Arrow */}
          <div className="flex items-center">
            <button
              onClick={handleBack}
              className="text-2xl mr-4 text-gray-700 hover:text-gray-900"
            >
              &#8592;
            </button>
            <h2 className="text-2xl font-semibold">Billing Information</h2>
          </div>

          {/* Ticket Type Selection */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Select Ticket Type</h3>
            <div className="flex items-center space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="ticketType"
                  value="Normal"
                  checked={ticketType === "Normal"}
                  onChange={handleTicketTypeChange}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2 text-base">Normal Ticket</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="ticketType"
                  value="VIP"
                  checked={ticketType === "VIP"}
                  onChange={handleTicketTypeChange}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2 text-base">VIP Ticket</span>
              </label>
            </div>
          </div>

          {/* Billing Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Billing Information</h3>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                placeholder="Enter address"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                placeholder="Enter city"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <input
                type="text"
                placeholder="Enter country"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <hr className="border-gray-300 my-6" />

          {/* Credit Card Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Credit Card Information</h3>

            {/* Cardholder Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Cardholder Name
              </label>
              <input
                type="text"
                placeholder="Enter cardholder name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Card Number */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Card Number
              </label>
              <input
                type="text"
                placeholder="Enter card number"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Expiry Date & CVV */}
            <div className="grid grid-cols-3 gap-4 items-center">
              {/* Expiry Date */}
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Expiry Date
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="MM"
                    maxLength={2}
                    className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="self-center">/</span>
                  <input
                    type="text"
                    placeholder="YYYY"
                    maxLength={4}
                    className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              {/* CVV */}
              <div>
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input
                  type="text"
                  placeholder="CVV"
                  maxLength={4}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-1/3 bg-gray-100 p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Order Summary</h3>

            {/* Date & Time */}
            <div>
              <span className="text-sm text-gray-600">Date &amp; Time</span>
              <div className="flex justify-between mt-1">
                <span className="text-base">{eventDate}</span>
              </div>
            </div>

            {/* Ticket Type & Price */}
            <div>
              <span className="text-sm text-gray-600">Ticket Type</span>
              <div className="flex justify-between mt-1">
                <span className="text-base">{ticketType} Ticket</span>
                <span className="text-base">{prices[ticketType]}</span>
              </div>
            </div>

            <hr className="border-gray-300" />

            {/* Total */}
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>{prices[ticketType]}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className="mt-8 w-full bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-800"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
