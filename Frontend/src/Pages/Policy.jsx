import React from "react";
import {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineUserCircle,
  HiOutlineDocumentText,
} from "react-icons/hi2";

const Policy = () => {
  const sections = [
    {
      icon: <HiOutlineUserCircle size={28} />,
      title: "Information We Collect",
      description:
        "We collect basic information such as your name, email address, phone number, shipping address, and payment details to process your orders and improve your shopping experience.",
      color: "bg-indigo-100 text-[#4F46E5]",
    },
    {
      icon: <HiOutlineDocumentText size={28} />,
      title: "How We Use Your Information",
      description:
        "Your information is used to process orders, provide customer support, send order updates, and improve our products and services.",
      color: "bg-sky-100 text-[#0EA5E9]",
    },
    {
      icon: <HiOutlineLockClosed size={28} />,
      title: "Data Security",
      description:
        "We use industry-standard security measures to protect your personal information and ensure secure online transactions.",
      color: "bg-orange-100 text-[#F97316]",
    },
    {
      icon: <HiOutlineShieldCheck size={28} />,
      title: "Your Privacy Rights",
      description:
        "You have the right to access, update, or request deletion of your personal information at any time by contacting our support team.",
      color: "bg-green-100 text-[#22C55E]",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] dark:bg-slate-900 py-16 mt-20">
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#4F46E5] font-semibold uppercase tracking-widest">
            Privacy Policy
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] dark:text-slate-50 mt-3">
            Your Privacy Matters
          </h1>

          <p className="text-[#6B7280] dark:text-slate-300 mt-5 leading-8">
            At ShopEase, we are committed to protecting your personal
            information and ensuring a safe, secure, and transparent shopping
            experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 border border-[#E5E7EB] dark:border-slate-600 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.color}`}
              >
                {item.icon}
              </div>

              <h2 className="text-xl font-semibold text-[#111827] dark:text-slate-50 mt-6">
                {item.title}
              </h2>

              <p className="text-[#6B7280] dark:text-slate-300 mt-3 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Policy Details */}
        <div className="mt-16 bg-white dark:bg-slate-800 border border-[#E5E7EB] dark:border-slate-600 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827] dark:text-slate-50">
            Privacy Policy Summary
          </h2>

          <ul className="mt-6 space-y-4 list-disc pl-6 text-[#6B7280] dark:text-slate-300 leading-7">
            <li>We collect only the information necessary to process your orders.</li>
            <li>Your payment information is handled through secure payment gateways.</li>
            <li>We never sell or rent your personal information to third parties.</li>
            <li>Your information may be used to improve our website and customer experience.</li>
            <li>You can request access, correction, or deletion of your personal data.</li>
            <li>By using ShopEase, you agree to the terms outlined in this Privacy Policy.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Policy;