import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setShippingAddress } from "../redux/slices/checkOutSlice";

const Checkout = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateForm = () => {
    if (!fullName.trim()) {
      toast.error("Full Name is required");
      return false;
    }

    if (!phone.trim()) {
      toast.error("Phone Number is required");
      return false;
    }

    if (!/^\d{10}$/.test(phone)) {
      toast.error("Phone Number must be 10 digits");
      return false;
    }

    if (!email.trim()) {
      toast.error("Email is required");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Enter a valid email");
      return false;
    }

    if (!streetAddress.trim()) {
      toast.error("Street Address is required");
      return false;
    }

    if (!city.trim()) {
      toast.error("City is required");
      return false;
    }

    if (!state.trim()) {
      toast.error("State is required");
      return false;
    }

    if (!pincode.trim()) {
      toast.error("Pincode is required");
      return false;
    }

    if (!/^\d{6}$/.test(pincode)) {
      toast.error("Pincode must be 6 digits");
      return false;
    }

    if (!country.trim()) {
      toast.error("Country is required");
      return false;
    }

    return true;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 mt-24 sm:mt-24 lg:mt-25">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 mt-8 sm:mt-10">
        Shipping Address
      </h1>

      <div className="bg-white shadow rounded-xl p-4 sm:p-6 space-y-5">
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg p-3 text-sm sm:text-base outline-none focus:border-indigo-600"
        />

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Phone Number"
          className="w-full border rounded-lg p-3 text-sm sm:text-base outline-none focus:border-indigo-600"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-lg p-3 text-sm sm:text-base outline-none focus:border-indigo-600"
        />

        <textarea
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
          placeholder="Street Address"
          rows="4"
          className="w-full border rounded-lg p-3 text-sm sm:text-base outline-none resize-none focus:border-indigo-600"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="City"
            className="border rounded-lg p-3 text-sm sm:text-base outline-none focus:border-indigo-600"
          />

          <input
            value={state}
            onChange={(e) => setState(e.target.value)}
            type="text"
            placeholder="State"
            className="border rounded-lg p-3 text-sm sm:text-base outline-none focus:border-indigo-600"
          />

          <input
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            type="text"
            placeholder="Pincode"
            className="border rounded-lg p-3 text-sm sm:text-base outline-none focus:border-indigo-600"
          />

          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            placeholder="Country"
            className="border rounded-lg p-3 text-sm sm:text-base outline-none focus:border-indigo-600"
          />
        </div>

        <Button
          text="Continue to Payment"
          className="w-full py-3 text-sm sm:text-base"
          onclick={() => {
            if (!validateForm()) return;

            dispatch(
              setShippingAddress({
                fullName,
                phone,
                email,
                streetAddress,
                city,
                state,
                pincode,
                country,
              })
            );

            navigate("/payment");
          }}
        />
      </div>
    </div>
  );
};

export default Checkout;