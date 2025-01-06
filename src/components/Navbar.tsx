"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentDateTime(now.toLocaleString("en-US", options));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000); // Update every second
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <header className="text-gray-400 bg-gray-400 body-font shadow-lg mt-0 p-1">
      <div className="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center">
        <div className="flex-1 flex items-center text-black space-x-6">
          {/* Image before date and time */}
          <Image
  src="/images/logoDark.png"
  alt="Logo Dark"
  width={150} // Replace with the original or desired width
  height={75} // Adjust proportionally to maintain aspect ratio
  priority // Optional
/>
          <span>{currentDateTime}</span>
        </div>

        <nav className="flex flex-col mr-8 md:flex-row gap-4 md:gap-6 lg:gap-8 items-center justify-center font-bold text-sm md:text-base lg:text-lg text-black">
  <Link
    href="/"
    className="hover:text-green-700 transition-colors duration-300 transform hover:scale-105"
  >
    Home
  </Link>
  <Link
    href="/pages/about"
    className="hover:text-green-700 transition-colors duration-300 transform hover:scale-105"
  >
    About
  </Link>
  <Link
    href="/pages/contact"
    className="hover:text-green-700 transition-colors duration-300 transform hover:scale-105"
  >
    Contact
  </Link>
  <Link
    href="/pages/blog"
    className="hover:text-green-700 transition-colors duration-300 transform hover:scale-105"
  >
    Blog
  </Link>
</nav>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/zeenat-yameen-0168a829b" 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <button className="inline-flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-white mt-8 md:mt-0 transition-colors duration-300">
            Linkedin
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M16 8a6 6 0 01-12 0V4a6 6 0 0112 0v4z" />
              <path d="M2 14h20v8H2z" />
            </svg>
          </button>
        </a>
      </div>
    </header>
  );
}
