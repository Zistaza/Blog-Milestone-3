import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-400 text-white body-font mt-20 p-5">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          className="flex title-font font-medium items-center md:justify-start justify-center text-black"
        >
         <Image src="/images/logoDark.png" alt="logo" width={80} height={80}
         ></Image>
          
        </a>
        <p className="text-sm text-purple-700 font-bold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Zeenat Yameen —{" "}
          <a
            href="https://twitter.com/knyttneve"
            className="text-purple-700 font-bold ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Zistaza
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-blue-900 rounded-lg hover:scale-125 transform transition-transform duration-200" href="https://web.facebook.com/">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 20"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-blue-900 rounded-lg hover:scale-125 transform transition-transform duration-200">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 20"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-purple-700 rounded-lg hover:scale-125 transform transition-transform duration-200" href="https://instagram.com/zeenat.yameen">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 20"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-blue-900 rounded-lg hover:scale-125 transform transition-transform duration-200" href="https://www.linkedin.com/in/zeenat-yameen-0168a829b" >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 20"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
