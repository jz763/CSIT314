export const Ticket = () => {
  return (
    <div className="w-[600px] h-30 bg-[#EDEDED] rounded-[10px]">
      <button className="ml-[530px] mt-1 font-bold">Refund</button>
      <div className="flex justify-center pt-5 space-x-15">
        <div>Event Name</div>
        <div>Attendee Name</div>
        <div>Date & Time</div>
      </div>
    </div>
  );
};
