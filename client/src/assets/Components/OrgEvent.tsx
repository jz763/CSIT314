import concertIMG from "../Images/concertIMG.png";
import deleteBut from "../Images/delete-circled-outline.svg";
import editBut from "../Images/edit-pencil.svg";
import attendeeBut from "../Images/people-outline.svg";

export const OrgEvent = () => {
  return (
    <div className="pt-5 flex justify-center items-center">
      <div className="bg-white w-180 h-30 rounded-[10px]">
        <div className="flex items-center">
          <img
            className="rounded-tl-[8px] rounded-bl-[8px] h-30 w-50"
            src={concertIMG}
          />
          <div className="ml-10 flex space-x-10">
            <div>Event Name</div>
            <div>Location</div>
            <div>Date & Time</div>
            <div>Price</div>
          </div>
          <button className="pt-20 pl-10">
            <img className="w-8 h-8" src={attendeeBut} />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2 w-10 h-20 bg-white rounded-tr-[10px] rounded-br-[10px]">
        <button>
          <img className="h-8 w-8" src={deleteBut} />
        </button>
        <button>
          <img className="h-8 w-8" src={editBut} />
        </button>
      </div>
    </div>
  );
};
