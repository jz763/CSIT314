import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Navbar } from "../../assets/Components/Navbar";
import { Footer } from "../../assets/Components/Footer";

// Example event image
import img1 from "../../assets/Images/concertIMG.png";

// Imported SVG icons
import calendarSvg from "../../assets/Images/calendar-time.svg";
import locationSvg from "../../assets/Images/location-sharp-white.svg";
import phoneSvg from "../../assets/Images/phone.svg";
import mailSvg from "../../assets/Images/mail-white.svg";

export const Event = () => {
  const event = {
    title: "Live Concert: Rocking the Stage",
    description: `Join us for an unforgettable evening of live music featuring some of 
      the hottest rock bands in the country. Enjoy incredible lighting, 
      amazing sound, and a crowd that knows how to rock.`,
    date: "September 11th, 2001",
    location: {
      name: "World Trade Center",
      address: "Manhattan, New York, USA",
    },
    host: {
      name: "John Doe",
      avatar: "", // Organizer Profile Pic Here (if available)
    },
    normalPrice: "$45.00",
    vipPrice: "$85.00",
    contact: {
      phone: "+1 569 213 233",
      email: "senesh2003@gmail.com",
    },
  };

  // Carousel settings
  const responsive = {
    allScreens: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  const images = [img1];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Carousel (full-width) */}
      <div className="w-full mt-[110px]">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          showDots={false}
          arrows={true}
          ssr={true}
        >
          {images.map((src, idx) => (
            <div key={idx} className="w-full h-[500px] relative">
              <img
                src={src}
                alt={`Event slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Main Content: Information cards */}
      <div className="max-w-screen-xl mx-auto px-6 py-12 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* ───────────────────────────────────────────────────────────────── */}
          {/* Left Card: Event Title, Description, Date/Time, Location, Host */}
          {/* ───────────────────────────────────────────────────────────────── */}
          <div className="flex-1 bg-[rgba(255,255,255,0.05)] backdrop-blur-lg rounded-[20px] p-8 mb-8 lg:mb-0">
            {/* Event Title */}
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>

            {/* Event Description */}
            <div className="mb-8 space-y-4">
              <h2 className="text-2xl font-semibold">Event Description</h2>
              <p className="text-base leading-relaxed">{event.description}</p>
            </div>

            {/* Date & Time */}
            <div className="mb-6 flex items-center space-x-3">
              <img
                src={calendarSvg}
                alt="Calendar Icon"
                className="h-6 w-6 object-contain"
              />
              <span className="text-lg">{event.date}</span>
            </div>

            {/* Location */}
            <div className="mb-6 flex items-start space-x-3">
              <img
                src={locationSvg}
                alt="Location Icon"
                className="h-6 w-6 object-contain mt-0.5"
              />
              <div>
                <div className="text-lg font-medium">{event.location.name}</div>
                <div className="text-sm text-white/80">
                  {event.location.address}
                </div>
              </div>
            </div>

            {/* Hosted By */}
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <span className="text-base text-white/80">Hosted By:</span>
                <div className="mt-1 flex items-center space-x-2">
                  {event.host.avatar ? (
                    <img
                      src={event.host.avatar}
                      alt={event.host.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      {/* Placeholder avatar icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5.121 17.804A4 4 0 016 7h12a4 4 0 01.879 10.804M12 7v0m0 0a4 4 0 110 8 4 4 0 010-8z"
                        />
                      </svg>
                    </div>
                  )}
                  <span className="text-lg">{event.host.name}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────────────── */}
          {/* Right-hand Column: Price Card and Contact Card */}
          {/* ───────────────────────────────────────────────────────────────── */}
          <div className="flex-shrink-0 w-full lg:w-[360px] flex flex-col space-y-6">
            {/* Price Card */}
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-lg rounded-[20px] p-6">
              <h2 className="text-2xl font-semibold mb-4">Price</h2>

              <div className="mb-4">
                <span className="text-base text-white/80">Normal Ticket:</span>
                <div className="text-xl font-medium">{event.normalPrice}</div>
              </div>

              <div className="mb-6">
                <span className="text-base text-white/80">VIP Ticket:</span>
                <div className="text-xl font-medium">{event.vipPrice}</div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-medium">
                Get Tickets
              </button>
            </div>

            {/* Contact Information Card */}
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-lg rounded-[20px] p-6 flex flex-col space-y-4">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <div className="flex items-center space-x-2">
                <img
                  src={phoneSvg}
                  alt="Phone Icon"
                  className="h-5 w-5 object-contain"
                />
                <span className="text-base">{event.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={mailSvg}
                  alt="Email Icon"
                  className="h-5 w-5 object-contain"
                />
                <span className="text-base">{event.contact.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
