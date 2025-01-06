import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div  className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Contact <span className="text-green-600">Me</span>
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="input-box space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="input-box space-y-4">
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          <div className="input-group-2">
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          <div className="text-center">
            <input
              type="submit"
              value="Send Message"
              className="btn bg-green-600 text-white py-2 px-6 rounded-md cursor-pointer hover:bg-blue-700 transition-colors duration-300"
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
