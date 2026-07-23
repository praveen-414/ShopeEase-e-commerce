import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import api from "../config/axios";

const MyOrders = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await api.get("/order/my-orders");
        console.log(res);
        
        setOrders(res.data.orders);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className=" bg-gray-50 py-10 mt-28 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold dark:text-slate-50">My Orders</h1>

          {orders.length > 0 && (
            <p className="text-gray-500 dark:text-slate-300">
              {orders.length} {orders.length === 1 ? "Order" : "Orders"}
            </p>
          )}
        </div>

        {orders.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-10 text-center">
            <h2 className="text-2xl font-semibold dark:text-slate-50">
              No Orders Yet
            </h2>

            <p className="text-gray-500 mt-2 dark:text-slate-300">
              Looks like you haven't placed any orders.
            </p>

            <Link to="/">
              <Button
                text="Start Shopping"
                className="mt-6"
              />
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white dark:bg-slate-900 dark:border-slate-700 rounded-2xl shadow-sm border p-6"
              >
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-4 mb-4">

                  <div>
                    <h2 className="font-semibold text-lg dark:text-slate-50">
                      Order #{order._id.slice(-8).toUpperCase()}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1 dark:text-slate-300">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.orderStatus}
                  </span>
                </div>

                {/* Products */}
                <div className="space-y-4">
                  {order.items.map((item) => (
                    
                    
                    <div
                      key={item.product?._id}
                      className="flex gap-4 border-b last:border-none pb-4"
                    >
                 
                      <img
                        src={item.product?.productImage}
                        alt={item.product?.title}
                        className="w-20 h-20 object-contain bg-gray-100 rounded-lg dark:bg-slate-700"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold dark:text-slate-50">
                          {item.product?.title}
                        </h3>

                        <p className="text-gray-500 text-sm mt-1 dark:text-slate-300">
                          Quantity: {item?.quantity}
                        </p>

                        <p className="font-semibold mt-2">
                          ${item.product?.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
               <div className="border-t mt-5 pt-4 flex justify-between items-center">
  <div className="space-y-1 text-sm">
    <p>
      <strong>Payment:</strong> {order.paymentMethod}
    </p>

    <p>
      <strong>Status:</strong>{" "}
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
          order.orderStatus
        )}`}
      >
        {order.orderStatus}
      </span>
    </p>

    <p>
      <strong>Items:</strong> {order.items.length}
    </p>
  </div>

  <div className="text-right">
    <p className="text-gray-500 text-sm dark:text-slate-300">Total Amount</p>

    <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
      ${order.totalAmount.toFixed(2)}
    </h2>
  </div>
</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;