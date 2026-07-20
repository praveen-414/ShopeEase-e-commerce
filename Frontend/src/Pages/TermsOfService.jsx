import React from "react";
import {
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineShoppingBag,
  HiOutlineExclamationTriangle,
} from "react-icons/hi2";

const TermsOfService = () => {
  const sections = [
    {
      icon: <HiOutlineDocumentText size={28} />,
      title: "Acceptance of Terms",
      description:
        "By accessing and using ShopEase, you agree to comply with these Terms of Service and all applicable laws and regulations.",
      color: "bg-indigo-100 text-[#4F46E5]",
    },
    {
      icon: <HiOutlineShoppingBag size={28} />,
      title: "Orders & Payments",
      description:
        "All orders are subject to product availability and payment confirmation. We reserve the right to cancel or refuse any order if necessary.",
      color: "bg-sky-100 text-[#0EA5E9]",
    },
    {
      icon: <HiOutlineShieldCheck size={28} />,
      title: "User Responsibilities",
      description:
        "You are responsible for providing accurate account information and maintaining the confidentiality of your login credentials.",
      color: "bg-green-100 text-[#22C55E]",
    },
    {
      icon: <HiOutlineExclamationTriangle size={28} />,
      title: "Limitations",
      description:
        "ShopEase is not responsible for delays caused by shipping partners, natural disasters, or circumstances beyond our reasonable control.",
      color: "bg-orange-100 text-[#F97316]",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-16 mt-20">
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#4F46E5] font-semibold uppercase tracking-widest">
            Terms of Service
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mt-3">
            Terms & Conditions
          </h1>

          <p className="text-[#6B7280] mt-5 leading-8">
            Please read these Terms of Service carefully before using ShopEase.
            By accessing or using our website, you agree to be bound by these
            terms.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {sections.map((item, index) => (
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

        {/* Terms Summary */}
        <div className="mt-16 bg-white border border-[#E5E7EB] rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#111827]">
            Terms Summary
          </h2>

          <ul className="mt-6 space-y-4 list-disc pl-6 text-[#6B7280] leading-7">
            <li>Users must provide accurate account and shipping information.</li>
            <li>All prices and product availability are subject to change without prior notice.</li>
            <li>Orders may be cancelled due to payment issues, stock availability, or suspected fraud.</li>
            <li>Products purchased through ShopEase are subject to our Returns & Refund Policy.</li>
            <li>Users must not misuse the website or engage in fraudulent activities.</li>
            <li>ShopEase reserves the right to update these Terms of Service at any time.</li>
            <li>Continued use of the website after changes indicates acceptance of the updated terms.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;