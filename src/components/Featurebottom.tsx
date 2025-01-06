
import React from "react";
import { MdOutlineMonitor } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoComment } from "react-icons/go";

const FeatureBottom = () => {
  return (
    <div
  className="relative bg-slate-600 text-white py-6 sm:py-8 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex flex-col gap-6 lg:gap-0 lg:flex-row justify-center items-center lg:h-60"
>
  <div className="w-full lg:w-[60%] flex flex-col gap-3 text-center lg:text-left">
    <p className="text-xs sm:text-sm uppercase font-bodyFont font-semibold text-white/50">
      My Blog
    </p>
    <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
      These 7 things will change the way you approach learning!
    </h3>
    <p className="text-xs sm:text-sm text-white/50">Camila Hoffman / 4 weeks ago</p>
  </div>
  <div className="w-full lg:w-[40%] flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 flex-wrap">
    <div className="flex flex-col items-center group">
      <MdOutlineMonitor className="text-3xl sm:text-4xl text-gray-300 group-hover:text-white duration-300" />
      <p className="text-xs sm:text-sm font-titleFont text-white/50 group-hover:text-white">
        Watch on YouTube
      </p>
    </div>
    <div className="flex flex-col items-center group">
      <IoMdHeartEmpty className="text-3xl sm:text-4xl text-gray-300 group-hover:text-white duration-300" />
      <p className="text-xs sm:text-sm font-titleFont text-white/50 group-hover:text-white">
        Like our contents
      </p>
    </div>
    <div className="flex flex-col items-center group">
      <GoComment className="text-3xl sm:text-4xl text-gray-300 group-hover:text-white duration-300" />
      <p className="text-xs sm:text-sm font-titleFont text-white/50 group-hover:text-white">
        Place comments
      </p>
    </div>
  </div>
</div>

  );
};

export default FeatureBottom;
