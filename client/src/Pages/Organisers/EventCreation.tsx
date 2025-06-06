import React, { useState, DragEvent, ChangeEvent } from "react";

export const EventCreation: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImage(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 to-black flex items-center justify-center">
      <div className="bg-gray-200 p-10 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-black">Create Event</h1>

        <div
          className={`border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center mb-6 transition-colors duration-200 ${
            isDragging ? "border-blue-500 bg-blue-100" : "border-gray-400 bg-gray-300"
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <label className="bg-black text-white py-2 px-6 rounded-lg cursor-pointer shadow-md mb-2 hover:bg-gray-800 transition duration-200">
            Select Image
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
          <p className="text-sm font-semibold text-center">
            Or Drag and Drop Image Here
          </p>
          {image && (
            <p className="mt-2 text-sm text-gray-700">
              Selected: <strong>{image.name}</strong>
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="font-bold block mb-1">Event Name:</label>
          <input
            type="text"
            placeholder="Enter Event Name Here"
            className="w-full border-b-2 border-gray-500 bg-transparent outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="font-bold block mb-1">Event Description</label>
          <textarea
            rows={4}
            placeholder="Enter Event Description Here"
            className="w-full p-2 border border-gray-400 rounded-md"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="font-bold block mb-1">Time & Date</label>
          <div className="flex items-center space-x-2">
            <span className="text-lg">📅</span>
            <input
              type="datetime-local"
              className="border border-gray-400 p-1 rounded-md"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="font-bold block mb-1">Location</label>
          <div className="flex items-center space-x-2">
            <span className="text-lg">📍</span>
            <input
              type="text"
              placeholder="Location"
              className="flex-grow border border-gray-400 p-1 rounded-md"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="font-bold block mb-1">Price</label>
          <div className="space-y-2">
            <div className="border border-gray-400 rounded-md px-2">
              <span className="mr-1">$</span>
              <input
                type="number"
                placeholder="Price"
                className="w-20 bg-transparent outline-none"
              />
            </div>
            <div className="border w-20 border-gray-400 rounded-md px-2">
              <span className="mr-1">$</span>
              <input
                type="number"
                placeholder="Price"
                className="w-20 bg-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-black text-white py-2 px-8 rounded-lg font-semibold shadow-md hover:bg-gray-800 transition duration-200">
            Upload Event
          </button>
        </div>
      </div>
    </div>
  );
};
