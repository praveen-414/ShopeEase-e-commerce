import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import api from "../config/axios";
import Button from "../components/Button";
import toast from "react-hot-toast";
import { setUser } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      return toast.error("All fields are required!");
    }
    if (password != confirmPassword) {
      return toast.error("Password doen't match!");
    }
    setLoading(true);
    try {
      const res = await api.post("/auth/register", {
        name,
        email,
        password,
      });
      console.log(res.data);
      
      dispatch(setUser(res.data));
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      console.log(error.response?.data);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-dvh flex justify-center items-center pt-24 px-4 relative overflow-y-auto">
      <div className="absolute top-10 left-10">
        <img src={logo} alt="" className="w-40" />
      </div>
      <div className="bg-[FFFFFF] w-full md:w-[60%] lg:w-[30%] h-fit border border-[#E5E7EB] rounded-lg shadow-md flex flex-col gap-7 p-8">
        {/* heading  */}
        <h1 className="text-center text-[#111827] text-xl md:text-2xl lg:text-3xl font-bold">
          Create your account
        </h1>
        {/* input fields  */}
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="py-2 rounded-md bg-transparent outline-0 border border-[#E5E7EB] focus:ring-2 focus:ring-[#A1A1AA] px-3"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="py-2 rounded-md bg-transparent outline-0 border border-[#E5E7EB] focus:ring-2 focus:ring-[#A1A1AA] px-3"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            className="py-2 rounded-md bg-transparent outline-0 border border-[#E5E7EB] focus:ring-2 focus:ring-[#A1A1AA] px-3"
          />
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm password"
            className="py-2 rounded-md bg-transparent outline-0 border border-[#E5E7EB] focus:ring-2 focus:ring-[#A1A1AA] px-3"
          />

          <p className="text-[#6B7280] text-xs">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#4F46E5] text-xs font-bold cursor-pointer"
            >
              Login
            </Link>
          </p>

          {/* signup button  */}

          <Button text={loading ? "Signing..." : "Sign up"} />
        </form>
      </div>
    </div>
  );
};

export default Register;
