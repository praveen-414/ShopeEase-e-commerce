import React from "react";
import {
  HiOutlineArrowPath,
  HiOutlineCreditCard,
  HiOutlineClipboardDocumentCheck,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const Returns = () => {
  const policies = [
    {
      icon: <HiOutlineArrowPath size={28} />,
      title: "Easy Returns",
      description:
        "Eligible products can be returned within 7 days of delivery in their original condition and packaging.",
      color: "bg-indigo-100 text-[#4F46E5]",
    },
    {
      icon: <HiOutlineClipboardDocumentCheck size={28} />,
      title: "Return Approval",
      description:
        "Once we receive your return request, our team will review and approve it before pickup is scheduled.",
      color: "bg-sky-100 text-[#0EA5E9]",
    },
    {
      icon: <HiOutlineCreditCard size={28} />,
      title: "Refund Process",
      description:
        "Refunds are initiated after the returned item passes our quality inspection and are processed to your original payment method.",
      color: "bg-orange-100 text-[#F97316]",
    },
    {
      icon: <HiOutlineShieldCheck size={28} />,
      title: "Quality Assurance",
      description:
        "Items that are damaged, used, or missing original packaging may not be eligible for a refund.",
      color: "bg-green-100 text-[#22C55E]",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-16 mt-20">
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#4F46E5] font-semibold uppercase tracking-widest">
            Returns & Refunds
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mt-3">
            Simple & Hassle-Free Returns
          </h1>

          <p className="text-[#6B7280] mt-5 leading-8">
            Your satisfaction is our priority. If you're not completely happy
            with your purchase, we're here to make the return and refund process
            quick and easy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {policies.map((item, index) => (
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

        {/* Policy */}
        <div className="mt-16 bg-white border border-[#E5E7EB] rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#111827]">
            Return & Refund Policy
          </h2>

          <ul className="mt-6 space-y-4 list-disc pl-6 text-[#6B7280] leading-7">
            <li>Returns are accepted within 7 days of delivery.</li>
            <li>Products must be unused and in their original packaging.</li>
            <li>Damaged or defective items can be replaced or refunded.</li>
            <li>Refunds are processed within 5–7 business days after approval.</li>
            <li>Shipping charges are non-refundable unless the product is defective.</li>
            <li>Some products may not be eligible for return due to hygiene or other restrictions.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Returns;