import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  FaMobileAlt,
  FaLaptop,
  FaShoppingBag,
  FaCouch,
  FaAppleAlt,
  FaTshirt,
  FaShoePrints,
} from "react-icons/fa";

import {
  GiPerfumeBottle,
  GiLipstick,
  GiWatch,
  GiDiamondRing,
  GiKitchenKnives,
  GiSteeringWheel,
} from "react-icons/gi";

import ProductCards from "../components/ProductCards";
import Button from "../components/Button";

const Categories = () => {
  const { products } = useSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { name: "All", slug: "all", icon: <FaShoppingBag /> },
    { name: "Smartphones", slug: "smartphones", icon: <FaMobileAlt /> },
    { name: "Laptops", slug: "laptops", icon: <FaLaptop /> },
    { name: "Beauty", slug: "beauty", icon: <GiLipstick /> },
    { name: "Fragrances", slug: "fragrances", icon: <GiPerfumeBottle /> },
    { name: "Groceries", slug: "groceries", icon: <FaAppleAlt /> },
    { name: "Furniture", slug: "furniture", icon: <FaCouch /> },
    {
      name: "Kitchen",
      slug: "kitchen-accessories",
      icon: <GiKitchenKnives />,
    },
    { name: "Men", slug: "mens-shirts", icon: <FaTshirt /> },
    { name: "Bags", slug: "womens-bags", icon: <FaShoppingBag /> },
    { name: "Shoes", slug: "mens-shoes", icon: <FaShoePrints /> },
    { name: "Watches", slug: "mens-watches", icon: <GiWatch /> },
    {
      name: "Jewellery",
      slug: "womens-jewellery",
      icon: <GiDiamondRing />,
    },
    { name: "Vehicles", slug: "vehicle", icon: <GiSteeringWheel /> },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-10 mt-10 dark:bg-slate-900">
      {/* Mobile Categories */}
      <div className="lg:hidden mb-8 overflow-x-auto scrollbar-none">
        <div className="flex gap-3 min-w-max pb-2 dark:bg-slate-900">
          {categories.map((category) => (
            <li
              key={category.slug}
              onClick={() => setSelectedCategory(category.slug)}
              className={`flex flex-col items-center justify-center rounded-xl border px-3 py-3 min-w-[80px] transition cursor-pointer dark:border-slate-700
              ${
                selectedCategory === category.slug
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span className="text-[11px] mt-2 text-center">
                {category.name}
              </span>
            </li>
          ))}
        </div>
      </div>

      <div className="flex gap-8 dark:bg-slate-900">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 xl:w-72 shrink-0">
          <div className="sticky top-32 bg-white border border-[#E5E7EB] rounded-xl p-5 max-h-[80vh] overflow-y-auto scrollbar-none dark:bg-slate-900 dark:border-slate-700">
            <h2 className="text-2xl font-bold mb-5 dark:text-slate-50">Categories</h2>

            <div className="space-y-2">
              {categories.map((category) => (
                <Button
                  key={category.slug}
                  text={category.name}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`w-full dark:hover:border-slate-700 dark:text-slate-50 ${
                    selectedCategory === category.slug
                      ? "bg-[#4F46E5] text-white"
                      : "bg-white dark:bg-slate-800 text-gray-700 hover:bg-indigo-50"
                  }`}
                />
              ))}
            </div>
          </div>
        </aside>

        {/* Products */}
        <main className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              {selectedCategory === "all"
                ? "All Products"
                : categories.find((c) => c.slug === selectedCategory)?.name}
            </h2>

            <p className="text-gray-500 text-sm">
              {filteredProducts.length} Products
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="flex justify-center items-center h-60">
              <h2 className="text-xl text-gray-500">No Products Found</h2>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredProducts.map((product) => (
                <Link key={product._id} to={`/product/${product._id}`}>
                  <ProductCards {...product} />
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default Categories;
