import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineHeart,
} from "react-icons/hi2";
import Button from "../components/Button";
import FeatureCard from "../components/FeaturedCard";

const AboutUs = () => {
  const features = [
    {
      icon: <HiOutlineShoppingBag size={28} />,
      title: "Quality Products",
      description:
        "Carefully selected products from trusted brands to ensure premium quality.",
      color: "bg-indigo-100 text-[#4F46E5]",
    },
    {
      icon: <HiOutlineTruck size={28} />,
      title: "Fast Delivery",
      description:
        "Reliable shipping with timely delivery right to your doorstep.",
      color: "bg-sky-100 text-[#0EA5E9]",
    },
    {
      icon: <HiOutlineShieldCheck size={28} />,
      title: "Secure Payments",
      description:
        "Shop with confidence using trusted and encrypted payment methods.",
      color: "bg-green-100 text-[#22C55E]",
    },
    {
      icon: <HiOutlineHeart size={28} />,
      title: "Customer First",
      description:
        "Friendly support and hassle-free returns to keep every customer satisfied.",
      color: "bg-orange-100 text-[#F97316]",
    },
  ];
  return (
    <section className="bg-[#F8FAFC] py-16 mt-20 dark:bg-slate-900">
      <div className="max-w-[90%] mx-auto px-5">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#4F46E5] dark:text-indigo-400 font-semibold uppercase tracking-wider">
            About ShopEase
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mt-3 dark:text-slate-50">
            Shopping Made Simple & Reliable
          </h1>

          <p className="text-[#6B7280] mt-5 leading-8 dark:text-slate-300">
            At ShopEase, our mission is to make online shopping fast,
            affordable, and enjoyable. We bring together quality products,
            secure payments, and reliable delivery to create a seamless shopping
            experience for everyone.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mt-20">
          {/* Image */}
          <div className="bg-white rounded-3xl border border-[#E5E7EB] p-10 flex justify-center items-center dark:bg-slate-700 dark:border-slate-700">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900"
              alt="About ShopEase"
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-[#111827] dark:text-slate-300">
              Your Trusted Online Shopping Destination
            </h2>

            <p className="text-[#6B7280] mt-5 leading-8 dark:text-slate-300">
              Whether you're shopping for fashion, electronics, home essentials,
              or lifestyle products, ShopEase offers a carefully selected
              collection at competitive prices. We believe shopping should be
              convenient, transparent, and enjoyable.
            </p>

            <p className="text-[#6B7280] mt-5 leading-8 dark:text-slate-300">
              With secure checkout, fast shipping, easy returns, and dedicated
              customer support, we're committed to delivering the best shopping
              experience every time.
            </p>

            <Link to="/">
              <Button text="Explore Products" className="py-3 mt-3" />
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white border border-[#E5E7EB] rounded-3xl mt-24 p-10 dark:bg-slate-900 dark:border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <h2 className="text-4xl font-bold text-[#4F46E5]">10K+</h2>
              <p className="text-[#6B7280] mt-2 dark:text-slate-300">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#0EA5E9]">500+</h2>
              <p className="text-[#6B7280] mt-2 dark:text-slate-300">Quality Products</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#22C55E]">99%</h2>
              <p className="text-[#6B7280] mt-2 dark:text-slate-300">Customer Satisfaction</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#F97316]">24/7</h2>
              <p className="text-[#6B7280] mt-2 dark:text-slate-300">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
