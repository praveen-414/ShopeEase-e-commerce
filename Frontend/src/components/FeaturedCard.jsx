import React from "react";

const FeatureCard = ({ icon, title, description, color }) => {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 hover:shadow-lg transition">
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center ${color}`}
      >
        {icon}
      </div>

      <h3 className="text-xl font-semibold mt-6 text-[#111827]">
        {title}
      </h3>

      <p className="text-[#6B7280] mt-3">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;