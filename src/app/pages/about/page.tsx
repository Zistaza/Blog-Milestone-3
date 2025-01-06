import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 md:p-20 lg:p-40 mt-4 mx-4 sm:mx-8 md:mx-16 lg:mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 animation-fadein">
          {/* Profile Image */}
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-red-500"
            src="/images/my.png"
            alt="My Profile"
          />

          {/* Profile Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold">Zeenat Yameen</h3>
            <p className="text-slate-600 mt-2">
              Frontend Developer | UI/UX Designer
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 text-black leading-relaxed text-center sm:text-left">
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
