import genreExample from "../Images/genreExample.png";

export const Genre = () => {
  return (
    <div className="w-28 h-36 relative">
      <div className="w-28 h-28 left-0 top-0 absolute bg-white rounded-full"></div>

      <img
        src={genreExample}
        alt="Genre icon"
        className="
          absolute
          top-15.5 left-1/2
          w-12 h-12
          object-contain
          -translate-x-1/2 -translate-y-1/2
        "
      />

      <div className="w-12 h-5 left-[35px] top-[130px] absolute text-white text-base font-normal [font-family:'Arial Rounded MT Bold']">
        Genre
      </div>
    </div>
  );
};
