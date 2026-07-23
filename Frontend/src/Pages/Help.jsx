import React from "react";

const Help = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 mt-20 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-5">
        <h1 className="text-4xl font-bold text-[#111827] dark:text-slate-50">
          Help Center
        </h1>

        <p className="mt-4 text-[#6B7280] leading-8 dark:text-slate-300">
          Welcome to the ShopEase Help Center. Here you'll find answers to
          common questions about orders, shipping, returns, payments, and your
          account.
        </p>

        <div className="mt-10 space-y-6">
          <div className="bg-white dark:bg-slate-800 dark:border-slate-600 p-6 rounded-xl border border-[#E5E7EB]">
            <h2 className="font-semibold text-xl dark:text-slate-50">Order Assistance</h2>
            <p className="mt-2 text-[#6B7280] dark:text-slate-300">
              Need help with your order? Contact our support team anytime.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 dark:border-slate-600 p-6 rounded-xl border border-[#E5E7EB]">
            <h2 className="font-semibold text-xl dark:text-slate-50">Payments</h2>
            <p className="mt-2 text-[#6B7280] dark:text-slate-300">
              We support secure payments using Cards, UPI and Net Banking.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 dark:border-slate-600 p-6 rounded-xl border border-[#E5E7EB]">
            <h2 className="font-semibold text-xl dark:text-slate-50">Account Support</h2>
            <p className="mt-2 text-[#6B7280] dark:text-slate-300">
              Manage your profile, password, addresses and saved orders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;