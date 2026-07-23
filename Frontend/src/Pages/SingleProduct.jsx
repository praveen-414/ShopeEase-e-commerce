import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import Button from "../components/Button";
import api from "../config/axios";
import { setProduct } from "../redux/slices/productSlice";
import { setAddToCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(() => {
    return Number(localStorage.getItem("quantity")) || 1;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { product } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await api.get(`/product/${id}`);
        dispatch(setProduct(res.data.product));
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [dispatch, id]);

  useEffect(() => {
    localStorage.setItem("quantity", quantity);
  }, [quantity]);

  const increaseCount = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseCount = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = async () => {
    if (!user) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }
    try {
      await api.post(
        "/cart/add",
        {
          productId: product._id,
          quantity,
        },
        {
          withCredentials: true,
        },
      );

      dispatch(
        setAddToCart({
          product,
          quantity,
        }),
      );

      toast.success("Item Added to Cart");

      setQuantity(1);
      localStorage.removeItem("quantity");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Image */}

        <div className="bg-white border dark:bg-slate-800 dark:border-slate-700 border-[#E5E7EB] rounded-xl p-6 flex justify-center items-center">
          <img
            src={product?.productImage}
            alt={product?.title}
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Product Details */}

        <div className="flex flex-col">
          <h1 className="text-2xl md:text-4xl font-bold">{product?.title}</h1>

          <div className="flex flex-wrap gap-5 mt-4 text-sm text-gray-600 dark:text-slate-300">
            <span>⭐ {product?.rating} / 5</span>

            <span className="text-green-600 font-semibold">
              Stock : {product?.stock}
            </span>
          </div>

          <h2 className="text-3xl font-bold text-[#4F46E5] mt-5 dark:text-indigo-400">
            $ {product?.price}
          </h2>

          <hr className="my-6" />

          <p className="text-gray-600 leading-7 dark:text-slate-300">{product?.description}</p>

          {/* Tags */}

          <div className="flex flex-wrap gap-3 mt-6">
            {product?.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Product Details */}

          <div className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">Product Details</h2>

            <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-3 gap-2">
              <span className="text-gray-500 dark:text-slate-300">Warranty</span>

              <span className="font-medium">
                {product?.warrantyInformation}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-3 gap-2">
              <span className="text-gray-500 dark:text-slate-300">Return Policy</span>

              <span className="font-medium">{product?.returnPolicy}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-3 gap-2">
              <span className="text-gray-500 dark:text-slate-300">Shipping</span>

              <span className="font-medium">
                {product?.shippingInformation}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
              <span className="text-gray-500 dark:text-slate-300">Availability</span>

              <span className="text-green-600 font-semibold">
                {product?.availabilityStatus}
              </span>
            </div>

            {/* Quantity & Add to Cart */}

            <div className="mt-10 flex flex-col sm:flex-row gap-5 sm:items-center">
              {/* Quantity Selector */}

              <div className="flex w-fit">
                <button
                  onClick={decreaseCount}
                  className="w-12 h-12 border border-[#E5E7EB] rounded-l-lg text-xl font-semibold hover:bg-gray-100 transition dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  -
                </button>

                <div className="w-14 h-12 border-y border-[#E5E7EB] flex items-center justify-center font-semibold dark:border-slate-700 ">
                  {quantity}
                </div>

                <button
                  onClick={increaseCount}
                  className="w-12 h-12 border border-[#E5E7EB] rounded-r-lg text-xl font-semibold hover:bg-gray-100 transition dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  +
                </button>
              </div>

              {/* Add To Cart */}

              <div className="w-full sm:w-auto">
                <Button
                  text="Add To Cart"
                  onclick={handleAddToCart}
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
