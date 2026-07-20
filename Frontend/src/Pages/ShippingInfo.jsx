import React from "react";
import {
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const ShippingInfo = () => {
  const shippingDetails = [
    {
      icon: <HiOutlineClock size={28} />,
      title: "Order Processing",
      description:
        "Orders are processed within 1–2 business days after successful payment confirmation.",
      color: "bg-indigo-100 text-[#4F46E5]",
    },
    {
      icon: <HiOutlineTruck size={28} />,
      title: "Delivery Time",
      description:
        "Standard delivery usually takes 3–7 business days depending on your location.",
      color: "bg-sky-100 text-[#0EA5E9]",
    },
    {
      icon: <HiOutlineGlobeAlt size={28} />,
      title: "Shipping Coverage",
      description:
        "We currently deliver across India. Delivery availability may vary for remote areas.",
      color: "bg-orange-100 text-[#F97316]",
    },
    {
      icon: <HiOutlineShieldCheck size={28} />,
      title: "Safe Delivery",
      description:
        "Every order is carefully packed to ensure your products arrive safely and securely.",
      color: "bg-green-100 text-[#22C55E]",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-16 mt-20">
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#4F46E5] font-semibold uppercase tracking-widest">
            Shipping Information
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mt-3">
            Fast & Reliable Shipping
          </h1>

          <p className="text-[#6B7280] mt-5 leading-8">
            We work hard to deliver your orders quickly and safely. Below you'll
            find everything you need to know about our shipping process.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {shippingDetails.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-7 hover:shadow-lg transition"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.color}`}
              >
                {item.icon}
              </div>

              <h2 className="text-xl font-semibold text-[#111827] mt-6">
                {item.title}
              </h2>

              <p className="text-[#6B7280] mt-3 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Shipping Policy */}
        <div className="mt-16 bg-white border border-[#E5E7EB] rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#111827]">
            Shipping Policy
          </h2>

          <ul className="mt-6 space-y-4 text-[#6B7280] list-disc pl-6">
            <li>Orders are processed within 1–2 business days.</li>
            <li>Delivery usually takes 3–7 business days.</li>
            <li>Free shipping on orders above ₹999.</li>
            <li>Shipping charges are calculated during checkout.</li>
            <li>You'll receive a tracking link once your order is shipped.</li>
            <li>Delivery times may vary during holidays or peak seasons.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ShippingInfo;