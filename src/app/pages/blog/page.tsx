import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="border-2 border-green-600 p-6 rounded-lg mx-10 my-12">
        <h2 className="text-3xl font-bold text-center mt-40">
          To Read Our Latest Blogs Please Return Back To Home Page
        </h2>
        <div className="text-center">
            <Link href="/">
          <input
            type="submit"
            value="Back To Home"
            className="btn bg-green-600 text-white py-2 px-6 rounded-md cursor-pointer hover:bg-blue-700 mt-20 transition-colors duration-300"
          />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
