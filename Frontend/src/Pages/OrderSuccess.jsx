import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const order = state?.order;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 mt-20">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
        <FiCheckCircle size={80} className="mx-auto text-green-500" />

        <h1 className="text-3xl font-bold mt-5">Order Placed Successfully!</h1>

        <p className="text-gray-500 mt-3">
          Thank you for shopping with{" "}
          <span className="font-semibold">ShopEase</span>. Your order has been
          placed successfully.
        </p>

        {order && (
          <div className="mt-6 bg-gray-100 rounded-xl p-4 text-left space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Order ID</span>
              <span className="font-semibold">
                #{order._id.slice(-8).toUpperCase()}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Order Date</span>
              <span className="font-medium">
                {new Date(order.createdAt).toLocaleDateString()}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Status</span>
              <span className="text-green-600 font-medium">{order.status}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Payment</span>
              <span className="font-medium">{order.paymentMethod}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Total</span>
              <span className="font-semibold">${order.total}</span>
            </div>
          </div>
        )}

        {!order && (
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-yellow-700 text-sm">
              Your order was placed successfully. You can view its details in{" "}
              <strong>My Orders</strong>.
            </p>
          </div>
        )}

        <Button
          onClick={() => navigate("/my-orders")}
          className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition"
          text="View My Orders"
        />

        <Button
          onClick={() => navigate("/")}
          className="w-full mt-3 border border-indigo-600 text-indigo-600 py-3 text-white rounded-lg hover:bg-indigo-50 transition"
          text="Continue Shopping"
        />
      </div>
    </div>
  );
};

export default OrderSuccess;
