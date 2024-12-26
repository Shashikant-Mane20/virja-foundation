"use client";
import React from "react";

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white px-4">
      <div className="text-center max-w-lg sm:max-w-xl">
        {/* Logo with Stylish Font */}
        <div className="mb-8">
          <h1
            className="text-4xl sm:text-5xl font-bold text-teal-400"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
           <span className="gap-1"> Virja Foundation </span>
          </h1>
          <p
            className="text-base sm:text-lg text-gray-300 mt-2"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Empowering Education, Shaping Futures.
          </p>
        </div>

        {/* Hero Section */}
        <div className="space-y-4 sm:space-y-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-white"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Launching Soon!
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Join us in our mission to make education accessible for everyone.
          </p>
        </div>

        {/* Contact Information */}
        {/* <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
          <p className="text-base sm:text-lg text-gray-400">
            📞 <span className="font-bold">Contact:</span> +91 91234 56789
          </p>
          <p className="text-base sm:text-lg text-gray-400">
            📧 <span className="font-bold">Email:</span> info@virjafoundation.org
          </p>
        </div> */}

        {/* Call to Action */}
        {/* <button className="mt-8 bg-teal-500 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-teal-400 transition duration-300">
          Notify Me
        </button> */}
      </div>
    </div>
  );
}

