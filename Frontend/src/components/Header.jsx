import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import api from "../config/axios";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/slices/userSlice";
import { setCart } from "../redux/slices/cartSlice";
import toast from "react-hot-toast";
import { setSearch } from "../redux/slices/searchSlice";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  const { search } = useSelector((state) => state.search);
  const { products } = useSelector((state) => state.products);

  const filteredProducts = products.filter((product) => {
    const query = search.toLowerCase();
    return (
      product?.title.toLowerCase().includes(query) ||
      product?.category.toLowerCase().includes(query)
    );
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "My Orders", path: "/my-orders" },
  ];

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout", {
        withCredentials: true,
      });
      dispatch(setUser(null));
      dispatch(setCart([]));

      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white border-b border-[#E5E7EB] z-50">
        {/* Top Header */}
        <div className="h-16 max-w-[90%] mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="w-28 md:w-36" />
          </Link>

          {/* Search (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-xl items-center border border-[#E5E7EB] rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-[#4F46E5] relative">
            <input
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              type="text"
              placeholder="Search for products..."
              className="flex-1 outline-none text-sm"
            />
            <IoIosSearch size={22} className="text-gray-500" />
          </div>
          {search.trim() && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
              {filteredProducts.length > 0 ? (
                <>
                  <div className="max-h-96 overflow-y-auto">
                    {filteredProducts.slice(0, 6).map((product) => (
                      <Link
                        key={product._id}
                        to={`/product/${product._id}`}
                        onClick={() => dispatch(setSearch(""))}
                        className="flex items-center gap-4 px-4 py-3 hover:bg-indigo-50 transition-all duration-200 border-b last:border-none"
                      >
                        {/* Product Image */}
                        <div className="w-16 h-16 rounded-xl bg-gray-100 p-2 flex items-center justify-center">
                          <img
                            src={product.productImage}
                            alt={product.title}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 overflow-hidden">
                          <h3 className="font-semibold text-gray-800 truncate">
                            {product.title}
                          </h3>

                          <p className="text-sm text-gray-500 capitalize">
                            {product.category}
                          </p>

                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-lg font-bold text-indigo-600">
                              ${product.price}
                            </span>

                            {product.oldPrice && (
                              <span className="text-sm text-gray-400 line-through">
                                ₹{product.oldPrice}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="text-gray-400 text-xl">→</div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <div className="py-10 text-center">
                  <div className="text-5xl mb-2">🔍</div>
                  <h3 className="font-semibold text-gray-700">
                    No products found
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Try searching with another keyword.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex items-center gap-1 p-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
            >
              <CiShoppingCart size={24} />
              <span className="hidden lg:block text-sm font-semibold">
                Cart
              </span>

              {cart?.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#4F46E5] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Login */}
            {user ? (
              <div className="relative">
                <Button
                  onClick={() => setOpen(!open)}
                  className="w-10 h-10 rounded-full bg-indigo-600 text-white font-semibold flex items-center justify-center"
                  text={user?.name?.charAt(0).toUpperCase()}
                />

                {open && (
                  <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg p-2">
                    <li
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded style-none list-none cursor-pointer"
                    >
                      Logout
                    </li>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
              >
                Login
              </Link>
            )}

            {/* Hamburger */}
            <Button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden bg-transparent text-black"
              text={
                menuOpen ? (
                  <HiOutlineX size={28} />
                ) : (
                  <HiOutlineMenu size={28} />
                )
              }
            />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-[5%] pb-3">
          <div className="flex items-center border border-[#E5E7EB] rounded-md px-3 py-2">
            <input
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              type="text"
              placeholder="Search products..."
              className="flex-1 outline-none text-sm"
            />
            <IoIosSearch size={20} />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[104px] left-0 w-full bg-white shadow-lg md:hidden z-40 mt-3">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 border-b hover:bg-gray-50 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
