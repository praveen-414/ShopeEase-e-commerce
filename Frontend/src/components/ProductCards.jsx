import React from "react";

const ProductCards = ({ title, rating, price, productImage, stock }) => {
  return (
    <div className="w-full bg-white border border-[#E5E7EB] rounded-xl p-4 hover:shadow-lg transition duration-300 hover:-translate-y-1 dark:bg-slate-700 dark:border-slate-700">
      {/* Product Image */}
      <div className="w-full aspect-square flex items-center justify-center overflow-hidden">
        <img
          src={productImage}
          alt={title}
          className="w-full h-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4 space-y-2">
        <h2 className="text-sm sm:text-base font-semibold line-clamp-2 min-h-[48px]">
          {title}
        </h2>

        <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-300">⭐ {rating} / 5</p>

        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-[#4F46E5] dark:text-indigo-400">${price}</p>

          <span
            className={`text-xs font-medium ${
              stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
