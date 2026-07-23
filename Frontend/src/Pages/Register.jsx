import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import api from "../config/axios";
import Button from "../components/Button";
import toast from "react-hot-toast";
import { setUser } from "../redux/slices/userSlice";
import { useDispatch,useSelector } from "react-redux";
import darkLogo from "../assets/darkLogo.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
   const { theme } = useSelector((state) => state.theme);
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

      dispatch(setUser(res.data.user));
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
  <div className="bg-[#F8FAFC] dark:bg-slate-900 min-h-dvh flex justify-center items-center pt-24 px-4 relative overflow-y-auto">
    {/* Logo */}
    <div
      onClick={() => navigate("/")}
      className="absolute top-10 left-10 cursor-pointer"
    >
      <img src={theme === "light" ? logo : darkLogo} alt="ShopEase Logo" className="w-40" />
    </div>

    <div className="bg-white dark:bg-slate-800 w-full md:w-[60%] lg:w-[30%] h-fit border border-[#E5E7EB] dark:border-slate-600 rounded-lg shadow-md flex flex-col gap-7 p-8 transition-colors duration-300">
      {/* Heading */}
      <h1 className="text-center text-[#111827] dark:text-slate-50 text-xl md:text-2xl lg:text-3xl font-bold">
        Create your account
      </h1>

      {/* Input Fields */}
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
          className="py-2 px-3 rounded-md bg-transparent text-[#111827] dark:text-slate-50 placeholder:text-[#9CA3AF] dark:placeholder:text-slate-400 border border-[#E5E7EB] dark:border-slate-600 outline-none focus:ring-2 focus:ring-[#4F46E5] dark:focus:ring-indigo-400"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="py-2 px-3 rounded-md bg-transparent text-[#111827] dark:text-slate-50 placeholder:text-[#9CA3AF] dark:placeholder:text-slate-400 border border-[#E5E7EB] dark:border-slate-600 outline-none focus:ring-2 focus:ring-[#4F46E5] dark:focus:ring-indigo-400"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
          className="py-2 px-3 rounded-md bg-transparent text-[#111827] dark:text-slate-50 placeholder:text-[#9CA3AF] dark:placeholder:text-slate-400 border border-[#E5E7EB] dark:border-slate-600 outline-none focus:ring-2 focus:ring-[#4F46E5] dark:focus:ring-indigo-400"
        />

        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm password"
          className="py-2 px-3 rounded-md bg-transparent text-[#111827] dark:text-slate-50 placeholder:text-[#9CA3AF] dark:placeholder:text-slate-400 border border-[#E5E7EB] dark:border-slate-600 outline-none focus:ring-2 focus:ring-[#4F46E5] dark:focus:ring-indigo-400"
        />

        <p className="text-[#6B7280] dark:text-slate-300 text-xs">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#4F46E5] font-bold dark:text-indigo-400"
          >
            Login
          </Link>
        </p>

        {/* Sign Up Button */}
        <Button text={loading ? "Signing..." : "Sign up"} />
      </form>
    </div>
  </div>
);
};

export default Register;
