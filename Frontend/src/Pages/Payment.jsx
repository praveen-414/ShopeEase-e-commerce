import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import api from "../config/axios";
import toast from "react-hot-toast";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [cardDetails, setCardDetails] = useState({
    cardHolder: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const navigate = useNavigate();
  const { shippingAddress } = useSelector((state) => state.checkout);
  const { cart } = useSelector((state) => state.cart);

  const [shipping, setShipping] = useState(0);

  useEffect(() => {
    setShipping(Number((Math.random() * 7 + 3).toFixed(2)));
  }, []);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );

  const discount = cart.reduce((acc, item) => {
    const discountAmount =
      (item.product.price * item.product.discountPercentage) / 100;

    return acc + discountAmount * item.quantity;
  }, 0);

  const total = subtotal + shipping - discount;

  const placeOrder = async () => {
    if (paymentMethod === "CARD") {
      if (
        !cardDetails.cardHolder.trim() ||
        !cardDetails.cardNumber.trim() ||
        !cardDetails.expiry.trim() ||
        !cardDetails.cvv.trim()
      ) {
        return toast.error("Please fill all card details");
      }

      if (cardDetails.cardNumber.length !== 16) {
        return toast.error("Card number must be 16 digits");
      }

      if (!/^\d{2}\/\d{2}$/.test(cardDetails.expiry)) {
        return toast.error("Enter expiry in MM/YY format");
      }

      if (cardDetails.cvv.length !== 3) {
        return toast.error("CVV must be 3 digits");
      }
    }

    try {
      const res = await api.post(
        "/order/place",
        {
          ...shippingAddress,
          paymentMethod,
        },
        {
          withCredentials: true,
        },
      );

      toast.success(res.data.message);

      navigate("/order");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 mt-30 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 dark:text-slate-50">Payment</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow p-6 dark:bg-slate-800">
            <h2 className="text-xl font-semibold mb-6">
              Select Payment Method
            </h2>

            {/* UPI */}
            <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer hover:border-indigo-600 dark:hover:border-indigo-400 dark:border-slate-600">
              <input
                type="radio"
                name="payment"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="font-medium">UPI</span>
            </label>

            {/* Card */}
            <label className="flex items-center gap-3 border rounded-lg p-4 mt-4 cursor-pointer hover:border-indigo-600 dark:hover:border-indigo-400 dark:border-slate-600">
              <input
                type="radio"
                name="payment"
                value="CARD"
                checked={paymentMethod === "CARD"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="font-medium">Credit / Debit Card</span>
            </label>

            {/* COD */}
            <label className="flex items-center gap-3 border rounded-lg p-4 mt-4 cursor-pointer hover:border-indigo-600 dark:hover:border-indigo-400 dark:border-slate-600">
              <input
                type="radio"
                name="payment"
                value="COD"
                checked={paymentMethod === "COD"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="font-medium">Cash on Delivery</span>
            </label>

            {/* Card Details */}

            {paymentMethod === "CARD" && (
              <div className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Card Holder Name"
                  value={cardDetails.cardHolder}
                  onChange={(e) =>
                    setCardDetails({
                      ...cardDetails,
                      cardHolder: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg p-3 outline-none focus:border-indigo-600"
                />

                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardDetails.cardNumber}
                  onChange={(e) =>
                    setCardDetails({
                      ...cardDetails,
                      cardNumber: e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 16),
                    })
                  }
                  className="w-full border rounded-lg p-3 outline-none focus:border-indigo-600"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "").slice(0, 4);

                      if (value.length > 2) {
                        value = value.slice(0, 2) + "/" + value.slice(2);
                      }

                      setCardDetails({
                        ...cardDetails,
                        expiry: value,
                      });
                    }}
                    className="border rounded-lg p-3 outline-none focus:border-indigo-600"
                  />

                  <input
                    type="password"
                    placeholder="CVV"
                    value={cardDetails.cvv}
                    onChange={(e) =>
                      setCardDetails({
                        ...cardDetails,
                        cvv: e.target.value.replace(/\D/g, "").slice(0, 3),
                      })
                    }
                    className="border rounded-lg p-3 outline-none focus:border-indigo-600"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-6 h-fit">
            <h2 className="text-xl font-semibold mb-5">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              text="Place Order"
              className="mt-5 w-full"
              onclick={placeOrder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
