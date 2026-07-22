import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../config/axios";
import ProductCards from "./ProductCards";
import { setProducts } from "../redux/slices/productSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="w-full mt-10 mb-10">
      <div className="w-full max-w-[90%] mx-auto">
        <h1 className="text-3xl font-semibold text-blue-600">
          Explore Products
        </h1>
        <p className="text-[#6B7280]">Browse our latest collection</p>

        {/* products  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {products?.map((product) => {
            return (
              <Link
                to={`/product/${product._id}`}
                key={product._id}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <ProductCards {...product} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
