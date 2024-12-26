"use client";
import React from "react";
import "../../app/style.css";  // Import the styles from your style.css file.

const generateRandomPosition = () => {
  return Math.random() * 100; 
};

export default function ComingSoon() {

  const snowflakes = Array(20).fill().map((_, index) => (
    <div
      key={index}
      className="snowflake"
      style={{
        left: `${generateRandomPosition()}%`,
        animationDuration: `${Math.random() * (20 - 8) + 8}s`,
        animationDelay: `${Math.random() * 10}s`, 
      }}
    >
      ❄
    </div>
  ));

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white px-4">
      <div className="text-center max-w-lg sm:max-w-xl">
        {/* Logo with Stylish Font */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-teal-400" style={{ fontFamily: "'Dancing Script', cursive" }}>
            <span className="gap-1">Virja Foundation</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mt-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Empowering Education, Shaping Futures.
          </p>
        </div>

        {/* Hero Section */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Launching Soon!
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Join us in our mission to make education accessible for everyone.
          </p>
        </div>
      </div>

      {/* Snowflake Effect Container */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="snowflakes">
          {snowflakes}
        </div>
      </div>

    </div>
  );
}
