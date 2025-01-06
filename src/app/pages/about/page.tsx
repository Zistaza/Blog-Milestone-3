import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 lg:p-20 mt-4 mx-4 sm:mx-8 md:mx-16 lg:mx-auto max-w-5xl">
        <div className="flex flex-col items-center space-y-4 animation-fadein">
          {/* Profile Image */}
          <Image
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-red-500"
            width={160}
            height={160}
            src="/images/my.png"
            alt="My Profile"
            priority // This attribute improves performance for above-the-fold images
          />

          {/* Profile Info */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold">Zeenat Yameen</h3>
            <p className="text-slate-600 font-medium mt-2 text-sm sm:text-base">
              Frontend Developer | UI/UX Designer
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 text-center sm:text-left text-sm sm:text-base md:text-lg leading-relaxed text-black font-medium">
          Zeenat Yameen is a budding web developer, brimming with enthusiasm and
          talent, set to excel in the industry.
        </p>

        {/* Social Links */}
        <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-3">
          <a
            href="https://instagram.com/zeenat.yameen"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-green-700 transition duration-300 text-sm sm:text-base"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/zeenat-yameen-0168a829b"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-green-700 transition duration-300 text-sm sm:text-base"
          >
            Linkedin
          </a>
          <a
            href="https://web.facebook.com/"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-green-700 transition duration-300 text-sm sm:text-base"
          >
            Facebook
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
