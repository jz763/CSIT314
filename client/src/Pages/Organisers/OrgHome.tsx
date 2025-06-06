import { OrgNavbar } from "../../assets/Components/OrgNavbar";
import { OrgEvent } from "../../assets/Components/OrgEvent";

export const OrgHome = () => {
  return (
    <div className="bg-[#1d1c1c] min-h-screen">
      <OrgNavbar />
      <div>
        <div className="text-[white] ml-45 flex space-x-3">
          <button
            className="w-30 rounded-[5px]
  border border-black
  bg-[#363636]
  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
  "
          >
            Create Event
          </button>
          <button
            className="w-30 rounded-[5px]
  border border-black
  bg-[#363636]
  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
  "
          >
            Analytics
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <div
            className="rounded-[10px]
    border-[0.5px] border-black
    bg-[rgba(217,217,217,0.03)]
    shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),_101.067px_-101.067px_101.067px_0px_rgba(165,165,165,0.03)_inset,_-101.067px_101.067px_101.067px_0px_rgba(255,255,255,0.03)_inset]
    backdrop-blur-[65.6933364868164px]
    w-3/4
    pb-4"
          >
            <OrgEvent />
            <OrgEvent />
            <OrgEvent />
            <OrgEvent />
          </div>
        </div>
      </div>
    </div>
  );
};
