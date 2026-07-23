import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "Browse products, add your favorite items to the cart, proceed to checkout, and complete your payment to place an order.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you'll receive a tracking link via email or SMS. You can also track it from the Track Order page.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept UPI, Credit Cards, Debit Cards, Net Banking, and Cash on Delivery (where available).",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Yes. Orders can be cancelled before they are shipped. After shipment, you can request a return if the product is eligible.",
    },
    {
      question: "How do I return a product?",
      answer:
        "Visit the Returns & Refunds page, submit a return request, and our team will arrange pickup if the product is eligible.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Standard delivery usually takes 3–7 business days depending on your location.",
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes. We provide free shipping on orders above ₹999.",
    },
    {
      question: "How long does a refund take?",
      answer:
        "Refunds are usually processed within 5–7 business days after the returned item passes inspection.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8FAFC] py-16 mt-20 dark:bg-slate-900">
      <div className="max-w-[90%] mx-auto px-5">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[#4F46E5] font-semibold uppercase tracking-widest">
            Frequently Asked Questions
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mt-3 dark:text-slate-50">
            How Can We Help?
          </h1>

          <p className="text-[#6B7280] mt-5 leading-8 dark:text-slate-300">
            Find answers to the most common questions about orders, payments,
            shipping, returns, and more.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 border border-[#E5E7EB] dark:border-slate-600 rounded-xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-lg font-semibold text-[#111827] dark:text-slate-50">
                  {faq.question}
                </span>

                {activeIndex === index ? (
                  <HiChevronUp
                    size={24}
                    className="text-[#4F46E5]"
                  />
                ) : (
                  <HiChevronDown
                    size={24}
                    className="text-[#6B7280] dark:text-slate-300"
                  />
                )}
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#6B7280] dark:text-slate-300 leading-7">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;