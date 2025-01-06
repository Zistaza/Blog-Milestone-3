"use client";

import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import { GoComment } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineMonitor } from "react-icons/md";

const Features = () => {
  const allImages = [
    "/images/bannerImgOne.jpg",
    "/images/bannerImgTwo.jpg",
    "/images/bannerImgThree.jpg",
    "/images/bannerImgFour.jpg",
    "/images/rampthree.jpg",
  ];

  const [activeImages, setActiveImages] = useState(allImages.slice(0, 4));
  const [startIndex, setStartIndex] = useState(0);

  const updateActiveImages = (newStartIndex: number) => {
    const nextImages = [];
    for (let i = 0; i < 4; i++) {
      nextImages.push(allImages[(newStartIndex + i) % allImages.length]);
    }
    setActiveImages(nextImages);
  };

  const handleNext = () => {
    const newStartIndex = (startIndex + 1) % allImages.length;
    setStartIndex(newStartIndex);
    updateActiveImages(newStartIndex);
  };

  const handlePrevious = () => {
    const newStartIndex = (startIndex - 1 + allImages.length) % allImages.length;
    setStartIndex(newStartIndex);
    updateActiveImages(newStartIndex);
  };

  return (
    <>
      <div className="relative flex items-center w-full">
        {/* Previous Button */}
        <button
          className="absolute left-2 md:left-4 z-10 p-2 text-white bg-blue-900 bg-opacity-50 rounded-full hover:bg-opacity-70 transition duration-300"
          onClick={handlePrevious}
          aria-label="Previous"
        >
          &larr;
        </button>
        {/* Banner Images */}
        <div className="flex gap-2 overflow-hidden w-full">
          {activeImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Banner ${index + 1}`}
              width={1600}
              height={100}
              priority // Optional
              className="w-full h-auto flex-shrink-0 transition-transform duration-500"
            />
          ))}
        </div>
        {/* Next Button */}
        <button
          className="absolute right-2 md:right-4 z-10 p-2 text-white bg-purple-900 bg-opacity-50 rounded-full hover:bg-opacity-70 transition duration-300"
          onClick={handleNext}
          aria-label="Next"
        >
          &rarr;
        </button>
      </div>

      <div
        className="relative z-20 bg-slate-600 text-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex flex-col gap-6 md:gap-10 lg:gap-0 lg:flex-row justify-center items-center lg:h-60 mt-[-80px] sm:mt-[-100px] md:mt-[-120px] lg:mt-[-140px]"
      >
        <div className="w-full lg:w-[60%] flex flex-col gap-3">
          <p className="text-xs sm:text-sm uppercase font-bodyFont font-semibold text-white/50">
            My Blog
          </p>
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            These 7 things will change the way you approach learning!
          </h3>
          <p className="text-xs sm:text-sm text-white/50">
            Camila Hoffman / 4 weeks ago
          </p>
        </div>
        <div className="w-full lg:w-[40%] flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 flex-wrap">
          <div className="flex flex-col items-center group">
            <MdOutlineMonitor className="text-3xl sm:text-4xl text-gray-300 group-hover:text-white duration-300" />
            <p className="text-xs sm:text-sm font-titleFont text-white/50 group-hover:text-white">
              Watch on YouTube
            </p>
          </div>
          <div className="flex flex-col items-center group">
            <IoMdHeartEmpty className="text-3xl sm:text-4xl text-gray-300 group-hover:text-red-600 duration-300" />
            <p className="text-xs sm:text-sm font-titleFont text-white/50 group-hover:text-white">
              Like our contents
            </p>
          </div>
          <div className="flex flex-col items-center group">
            <GoComment className="text-3xl sm:text-4xl text-gray-300 group-hover:text-purple-900 duration-300" />
            <p className="text-xs sm:text-sm font-titleFont text-white/50 group-hover:text-white">
              Place comments
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
