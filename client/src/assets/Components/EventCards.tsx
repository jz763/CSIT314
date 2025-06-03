import concertIMG from "../Images/concertIMG.png";

export const EventCards = () => {
  return (
    <div className="w-100 h-100 bg-white rounded-[20px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)]">
      <div>
        <img className="rounded-tl-[20px] rounded-tr-[20px]" src={concertIMG} />
      </div>
      <div className="text-center pt-[10px]">
        <div className="text-[30px] font-bold">Event Title</div>
        <div className="text-[20px]">Date/Time</div>
        <div className="text-[20px]">Address</div>
        <div className="text-[20px]">Price</div>
        <div className="text-[20px]">Organizer Name</div>
      </div>
    </div>
  );
};
