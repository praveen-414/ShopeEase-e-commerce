import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="w-full max-w-[90%] mx-auto mt-28 md:mt-36 lg:mt-40 ">
     <div className="relative overflow-hidden rounded-3xl
bg-gradient-to-r from-blue-50 via-white to-indigo-50
dark:bg-slate-900 dark:bg-none
min-h-[650px] lg:min-h-[605px]">
        {/* Decorative Circles */}
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-100 dark:bg-slate-700 opacity-40"></div>

        <div className="absolute bottom-0 right-20 md:right-32 h-44 w-44 md:h-56 md:w-56 rounded-full bg-indigo-100 opacity-30 dark:bg-slate-700"></div>

        <div className="absolute top-10 left-1/2 h-24 w-24 md:h-32 md:w-32 rounded-full bg-sky-100 opacity-40 dark:bg-slate-700"></div>

        <div className="grid lg:grid-cols-2 items-center gap-12 px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 dark:bg-slate-900">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-blue-600 text-white px-4 py-2 md:px-5 rounded-full text-xs sm:text-sm font-medium">
              🔥 Winter Sale 2026
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight dark:text-slate-50">
              Find Everything
              <br />
              You Need
            </h1>

            <p className="mt-5 text-base md:text-lg text-gray-600 leading-7 md:leading-8 max-w-xl mx-auto lg:mx-0 dark:text-slate-500">
              Discover the latest fashion trends, electronics, accessories and
              lifestyle essentials at the best prices. Shop from thousands of
              premium products with fast delivery.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12 text-center lg:text-left ">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-slate-50">
                  10K+
                </h2>
                <p className="text-gray-500 text-sm md:text-base dark:text-slate-500">
                  Happy Customers
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-slate-50">
                  500+
                </h2>
                <p className="text-gray-500 text-sm md:text-base dark:text-slate-500">
                  Premium Brands
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-slate-50">
                  24/7
                </h2>
                <p className="text-gray-500 text-sm md:text-base dark:text-slate-500">
                  Customer Support
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center items-center mt-12 lg:mt-0 ">
            <div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px] rounded-full bg-blue-100">
              {/* Shoe */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-2xl bg-white shadow-lg flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl hover:scale-110 transition">
                👟
              </div>

              {/* Shirt */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-2xl bg-white shadow-lg flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl hover:scale-110 transition">
                👕
              </div>

              {/* Headphone */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-2xl bg-white shadow-lg flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl hover:scale-110 transition">
                🎧
              </div>

              {/* Watch */}
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-2xl bg-white shadow-lg flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl hover:scale-110 transition">
                ⌚
              </div>

              {/* Offer */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 rounded-full bg-blue-600 text-white flex items-center justify-center text-center font-bold text-xl sm:text-2xl lg:text-4xl shadow-2xl animate-pulse">
                70%
                <br />
                OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
