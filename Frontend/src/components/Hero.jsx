import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="w-full max-w-[90%] mx-auto mt-40">
        
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 via-white to-indigo-50 flex items-center h-[605px]">
        {/* Decorative Circles */}
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-100 opacity-40"></div>

        <div className="absolute bottom-0 right-32 h-56 w-56 rounded-full bg-indigo-100 opacity-30"></div>

        <div className="absolute top-10 left-1/2 h-32 w-32 rounded-full bg-sky-100 opacity-40"></div>

        <div className="w-full grid lg:grid-cols-2 items-center px-8 md:px-16 py-16">
          {/* Left Side */}
          <div>
            <span className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium">
              🔥 Summer Sale 2026
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Find Everything
              <br />
              You Need
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl leading-8">
              Discover the latest fashion trends, electronics, accessories and
              lifestyle essentials at the best prices. Shop from thousands of
              premium products with fast delivery.
            </p>

            <div className="flex gap-4 mt-10">
              <Button text="Shop Now" />


              <button className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition">
                Explore
              </button>
            </div>

            {/* Stats */}

            <div className="flex gap-12 mt-14">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">10K+</h2>
                <p className="text-gray-500">Happy Customers</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">500+</h2>
                <p className="text-gray-500">Premium Brands</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">24/7</h2>
                <p className="text-gray-500">Customer Support</p>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative h-[350px] w-[350px] rounded-full bg-blue-100">
              <div className="absolute top-8 left-8 h-24 w-24 rounded-2xl bg-white shadow-lg flex items-center justify-center text-5xl">
                👟
              </div>

              <div className="absolute top-8 right-6 h-24 w-24 rounded-2xl bg-white shadow-lg flex items-center justify-center text-5xl">
                👕
              </div>

              <div className="absolute bottom-10 left-10 h-24 w-24 rounded-2xl bg-white shadow-lg flex items-center justify-center text-5xl">
                🎧
              </div>

              <div className="absolute bottom-8 right-8 h-24 w-24 rounded-2xl bg-white shadow-lg flex items-center justify-center text-5xl">
                ⌚
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-36 w-36 rounded-full bg-blue-600 text-white flex items-center justify-center text-center font-bold text-3xl shadow-xl">
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
