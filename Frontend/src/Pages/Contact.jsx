import React, { useState } from "react";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";
import Button from "../components/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#F8FAFC] pt-32 pb-16 mt-10">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#4F46E5] font-semibold uppercase tracking-widest text-sm">
            Contact Us
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mt-3">
            We'd Love to Hear From You
          </h1>

          <p className="text-[#6B7280] mt-5 leading-7 text-sm sm:text-base">
            Have a question, feedback, or need help with an order?
            Our team is always ready to assist you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-12 lg:mt-16">

          {/* Contact Info */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8">

            <h2 className="text-2xl font-bold text-[#111827]">
              Get in Touch
            </h2>

            <p className="text-[#6B7280] mt-4 leading-7">
              Reach out to us through any of the following methods.
              We usually respond within 24 hours.
            </p>

            <div className="space-y-6 mt-10">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-indigo-100 flex items-center justify-center text-[#4F46E5]">
                  <HiOutlineEnvelope size={24} />
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-[#6B7280] break-all">
                    support@shopease.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-sky-100 flex items-center justify-center text-sky-500">
                  <HiOutlinePhone size={24} />
                </div>

                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-[#6B7280]">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500">
                  <HiOutlineMapPin size={24} />
                </div>

                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-[#6B7280]">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10 rounded-xl bg-indigo-50 p-5">
              <h3 className="font-semibold">
                Customer Support
              </h3>

              <p className="text-[#6B7280] mt-2">
                Monday - Saturday
                <br />
                9:00 AM - 7:00 PM
              </p>
            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8">

            <h2 className="text-2xl font-bold text-[#111827]">
              Send a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#E5E7EB] px-4 py-3 outline-none focus:ring-2 focus:ring-[#4F46E5]"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#E5E7EB] px-4 py-3 outline-none focus:ring-2 focus:ring-[#4F46E5]"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#E5E7EB] px-4 py-3 outline-none focus:ring-2 focus:ring-[#4F46E5]"
                required
              />

              <textarea
                rows={6}
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-[#E5E7EB] px-4 py-3 outline-none focus:ring-2 focus:ring-[#4F46E5]"
                required
              />

              <Button
                text="Send Message"
                className="w-full"
              />

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;