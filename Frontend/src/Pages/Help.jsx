import React from "react";

const Help = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 mt-20">
      <div className="max-w-5xl mx-auto px-5">
        <h1 className="text-4xl font-bold text-[#111827]">
          Help Center
        </h1>

        <p className="mt-4 text-[#6B7280] leading-8">
          Welcome to the ShopEase Help Center. Here you'll find answers to
          common questions about orders, shipping, returns, payments, and your
          account.
        </p>

        <div className="mt-10 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
            <h2 className="font-semibold text-xl">Order Assistance</h2>
            <p className="mt-2 text-[#6B7280]">
              Need help with your order? Contact our support team anytime.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
            <h2 className="font-semibold text-xl">Payments</h2>
            <p className="mt-2 text-[#6B7280]">
              We support secure payments using Cards, UPI and Net Banking.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
            <h2 className="font-semibold text-xl">Account Support</h2>
            <p className="mt-2 text-[#6B7280]">
              Manage your profile, password, addresses and saved orders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;