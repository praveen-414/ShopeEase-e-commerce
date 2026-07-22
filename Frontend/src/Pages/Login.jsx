import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import toast from "react-hot-toast";
import api from "../config/axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("All fields are required!");
    }
    setLoading(true)
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });
      console.log(res.data.user);
      
      dispatch(setUser(res.data.user));
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      console.log(error.response?.data);
      toast.error(error.response?.data?.message || "Something went wrong");
    }finally{
      setLoading(false)
    }
  };


  return (
    <div className="bg-[#F8FAFC] min-h-dvh flex justify-center items-center pt-24 px-4 relative overflow-y-auto">
      {/* logo  */}
      <div 
      onClick={()=>navigate("/")}
      className="absolute top-10 left-10 cursor-pointer">
        <img src={logo} alt="" className="w-40" />
      </div>
      <div className="bg-[FFFFFF] w-full md:w-[60%] lg:w-[30%] h-fit border border-[#E5E7EB] rounded-lg shadow-md flex flex-col gap-7 p-8">
        {/* heading  */}
        <h1 className="text-center text-[#111827] text-3xl font-bold">
          Welcome Back! <br />
          Login
        </h1>
        {/* input fields  */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="py-2 rounded-md bg-transparent outline-0 border border-[#E5E7EB] focus:ring-2 focus:ring-[#4F46E5] px-3"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            className="py-2 rounded-md bg-transparent outline-0 border border-[#E5E7EB] focus:ring-2 focus:ring-[#4F46E5] px-3"
          />

          <p className="text-[#6B7280] text-xs">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#4F46E5] text-xs font-bold cursor-pointer"
            >
              Sign up
            </Link>
          </p>

          {/* Login button  */}
          <Button text={loading ? "Logging..." : "Login"} />
        </form>
      </div>
    </div>
  );
};

export default Login;
