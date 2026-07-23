import React, { useEffect, useState } from "react";
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft } from "react-icons/fi";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, setCart } from "../redux/slices/cartSlice";
import api from "../config/axios";

const Cart = () => {
  const [shipping, setShipping] = useState(0);

  useEffect(() => {
    setShipping(Number((Math.random() * 7 + 3).toFixed(2)));
  }, []);

  const { cart } = useSelector((State) => State.cart);
  const dispatch = useDispatch();

  const discount = cart.reduce((acc, item) => {
    const discountAmount =
      (item.product.price * item.product.discountPercentage) / 100;

    return acc + discountAmount * item.quantity;
  }, 0);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
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
    <div className="bg-gray-50 dark:bg-slate-900 py-10 mt-30">
      <div className="max-w-[90%] mx-auto px-4">
        <h1 className="text-4xl font-bold dark:text-slate-50">Your Cart ({cart?.length})</h1>

        <p className="text-gray-500 mt-2 dark:text-slate-300">Review your items before checkout.</p>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <h2 className="text-3xl font-bold dark:text-slate-50">Your Cart is Empty</h2>
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
            <div className="lg:col-span-2 bg-white rounded-xl shadow p-6 dark:bg-slate-800">
              {cart?.map((item) => (
                <div
                  key={item.product._id}
                  className="flex items-center justify-between border-b py-6 dark:border-slate-500"
                >
                  <div className="flex gap-5">
                    <img
                      src={item.product.productImage}
                      alt=""
                      className="w-28 h-28 object-contain border rounded-lg p-2 dark:border-slate-600"
                    />

                    <div>
                      <h2 className="font-semibold text-lg">
                        {item.product.title}
                      </h2>

                      <p className="text-indigo-600 font-semibold mt-2 dark:text-indigo-400">
                        ${item.product.price}
                      </p>

                      <p className="text-green-600 text-sm mt-1">
                        {item.product.availabilityStatus}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8">
                    <div className="py-1 px-4 font-semibold border border-[#E5E7EB] flex justify-center items-center dark:border-slate-600">
                      Quantity: {item.quantity}
                    </div>

                    <p className="font-semibold text-lg">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>

                    <button
                      onClick={() => handleRemove(item.product._id)}
                      className="text-gray-500 hover:text-red-500 cursor-pointer dark:text-slate-300"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}

              <Link to="/">
                <Button text="<- Continue Shopping" className="mt-5" />
              </Link>
            </div>

            {/* Right */}
            <div className="bg-white rounded-xl shadow p-6 h-fit dark:bg-slate-900 border dark:border-slate-700">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping}</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>- {discount.toFixed(2)}</span>
                </div>

                <hr className="dark:text-slate-700"/>

                <div className="flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span>{total.toFixed(2)}</span>
                </div>
              </div>

              <Link to="/checkout">
                <Button text="Proceed to Checkout" className="mt-5 w-full" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
