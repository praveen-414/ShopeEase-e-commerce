import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import api from "../config/axios";

const Cart = () => {
  const [shipping, setShipping] = useState(0);

  useEffect(() => {
    setShipping(Number((Math.random() * 7 + 3).toFixed(2)));
  }, []);

  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const discount = cart.reduce((acc, item) => {
    const discountAmount =
      (item.product.price * item.product.discountPercentage) / 100;

    return acc + discountAmount * item.quantity;
  }, 0);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const total = subtotal + shipping - discount;

  const handleRemove = async (productId) => {
    try {
      await api.delete(`/cart/remove/${productId}`, {
        withCredentials: true,
      });

      dispatch(removeFromCart(productId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-900 py-10 mt-28 md:mt-30 min-h-screen">
      <div className="max-w-[90%] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold dark:text-slate-50">
          Your Cart ({cart.length})
        </h1>

        <p className="text-gray-500 mt-2 dark:text-slate-300">
          Review your items before checkout.
        </p>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold dark:text-slate-50">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-2 dark:text-slate-300">
              Looks like you haven't added any products yet.
            </p>

            <Link to="/" className="mt-6">
              <Button text="Shop Now" />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            {/* Left */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow p-4 md:p-6">
              {cart.map((item) => (
                <div
                  key={item.product._id}
                  className="border-b dark:border-slate-600 py-5"
                >
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* Image + Details */}
                    <div className="flex gap-4 flex-1">
                      <img
                        src={item.product.productImage}
                        alt={item.product.title}
                        className="w-24 h-24 md:w-28 md:h-28 object-contain border rounded-lg p-2 dark:border-slate-600"
                      />

                      <div className="flex-1">
                        <h2 className="font-semibold text-base md:text-lg dark:text-white">
                          {item.product.title}
                        </h2>

                        <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-2">
                          ${item.product.price}
                        </p>

                        <p className="text-green-600 text-sm mt-1">
                          {item.product.availabilityStatus}
                        </p>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex sm:flex-col md:flex-row items-center justify-between sm:justify-start gap-4 md:gap-6">
                      <div className="border dark:border-slate-600 px-3 py-2 rounded-md text-sm font-semibold dark:text-white">
                        Qty: {item.quantity}
                      </div>

                      <p className="font-bold text-lg dark:text-white">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>

                      <button
                        onClick={() => handleRemove(item.product._id)}
                        className="text-gray-500 hover:text-red-500 transition"
                      >
                        <FiTrash2 size={22} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <Link to="/">
                <Button
                  text="← Continue Shopping"
                  className="mt-6 w-full sm:w-auto"
                />
              </Link>
            </div>

            {/* Right */}
            <div className="bg-white dark:bg-slate-900 border dark:border-slate-700 rounded-xl shadow p-5 md:p-6 h-fit">
              <h2 className="text-xl md:text-2xl font-semibold mb-6 dark:text-white">
                Order Summary
              </h2>

              <div className="space-y-4 text-sm md:text-base">
                <div className="flex justify-between dark:text-slate-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between dark:text-slate-300">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>- ${discount.toFixed(2)}</span>
                </div>

                <hr className="dark:border-slate-700" />

                <div className="flex justify-between font-bold text-lg md:text-xl dark:text-white">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Link to="/checkout">
                <Button
                  text="Proceed to Checkout"
                  className="mt-6 w-full"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;