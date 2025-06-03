import React from "react";
import { Genre } from "../../assets/Components/Genre";
import { EventCards } from "../../assets/Components/EventCards";
import Carousel from "react-multi-carousel";
import { Footer } from "../../assets/Components/Footer";
import "react-multi-carousel/lib/styles.css";

import event_img from "../../assets/images/concertIMG.png";
import "./HomePage.css";

export const HomePage: React.FC = () => {
  const responsive = {
    allScreens: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative">
   
      <Carousel
        className="relative top-27"
        responsive={responsive}
        arrows
        infinite
        autoPlay
        autoPlaySpeed={4000}
        keyBoardControl
        transitionDuration={600}
      >
        <div>
          <img
            className="w-full h-200 object-cover"
            src={event_img}
            alt="Hero event"
          />
          <div className="absolute top-130 left-30">
            <h1 className="text-white text-6xl [font-family:'Arial Rounded MT Bold']">
              Event Title
            </h1>
            <h2 className="text-white text-2xl [font-family:'Arial Rounded MT Bold']">
              Location
            </h2>
            <h2 className="text-white text-2xl [font-family:'Arial Rounded MT Bold']">
              Date/Time
            </h2>
            <h2 className="text-white text-2xl [font-family:'Arial Rounded MT Bold']">
              Price
            </h2>
          </div>
        </div>
      </Carousel>

      {/* ====== 2) Genre carousel ====== */}
      <div className="mt-8 w-[1166px] mx-auto h-[200px]">
        <Carousel
          responsive={responsive}
          arrows
          infinite
          keyBoardControl
          transitionDuration={500}
          className="
            rounded-[20px]
            bg-[rgba(85,85,85,0.14)]
            backdrop-blur-[40px]
            h-[200px]
          "
        >
          <div className="h-full flex items-center justify-center space-x-10 px-4">
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
          </div>

          <div className="h-full flex items-center justify-center space-x-10 px-4">
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
          </div>

          <div className="h-full flex items-center justify-center space-x-10 px-4">
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
          </div>
        </Carousel>
      </div>

      {/* ====== 3) Static “3 cards per slide” carousel ====== */}
      <div className="flex items-center justify-center pt-[100px] relative">
        <div
          className="
            w-[2000px]
            h-[1000px]
            rounded-[20px]
            bg-[rgba(85,85,85,0.07)]
            shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),_45.5px_-45.5px_45.5px_0px_rgba(64,64,64,0.07)_inset,_-45.5px_45.5px_45.5px_0px_rgba(255,255,255,0.07)_inset]
            backdrop-blur-[31.395000457763672px]
          "
        >
          <div className="mt-8 w-[2000px] mx-auto">
            <Carousel
              responsive={responsive}
              arrows
              infinite
              keyBoardControl
              transitionDuration={500}
            >
              {/* Slide 1: three static EventCards */}
              <div className="h-full flex items-center justify-center space-x-10 px-4">
                <EventCards />
                <EventCards />
                <EventCards />
              </div>

              {/* Slide 2: three static EventCards */}
              <div className="h-full flex items-center justify-center space-x-10 px-4">
                <EventCards />
                <EventCards />
                <EventCards />
              </div>

              {/* Slide 3: three static EventCards */}
              <div className="h-full flex items-center justify-center space-x-10 px-4">
                <EventCards />
                <EventCards />
                <EventCards />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
