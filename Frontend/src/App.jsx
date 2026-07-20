import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import AppLayout from "./Layout/AppLayout";
import Categories from "./Pages/Categories";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import SingleProduct from "./Pages/SingleProduct";
import Help from "./Pages/Help";
import ShippingInfo from "./Pages/ShippingInfo";
import Returns from "./Pages/Returns";
import Faq from "./Pages/Faq";
import PrivacyPolicy from "./Pages/Policy";
import TermsOfService from "./Pages/TermsOfService";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Payment from "./Pages/Payment";
import OrderSuccess from "./Pages/OrderSuccess";
import MyOrders from "./Pages/MyOrders";
import { useDispatch } from "react-redux";
import api from "./config/axios";
import { setCart } from "./redux/slices/cartSlice";
import { setProducts } from "./redux/slices/productSlice";
import { Navigate } from "react-router-dom";
import { setUser } from "./redux/slices/userSlice";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme == "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const getCurrentUser = async () => {
    try {
      const res = await api.get("/user/get-user", {
        withCredentials: true,
      });

      dispatch(setUser(res.data));
    } catch (error) {
      dispatch(setUser(null));
    } finally {
      setLoading(false);
    }
  };

  const getCartProducts = async () => {
    try {
      const res = await api.get("/cart/get-cart", {
        withCredentials: true,
      });

      dispatch(setCart(res.data.cart.items));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getProducts = async () => {
    try {
      const res = await api.get("/products");

      dispatch(setProducts(res.data.products));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCurrentUser();
    getProducts();
  }, []);

  useEffect(() => {
    if (user) {
      getCartProducts();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "about",
          element: <AboutUs />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "product/:id",
          element: <SingleProduct />,
        },
        {
          path: "help",
          element: <Help />,
        },
        {
          path: "shipping-info",
          element: <ShippingInfo />,
        },
        {
          path: "returns&refunds",
          element: <Returns />,
        },
        {
          path: "FAQs",
          element: <Faq />,
        },
        {
          path: "privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "termsofservice",
          element: <TermsOfService />,
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "payment",
          element: (
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          ),
        },
        {
          path: "order",
          element: (
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          ),
        },
        {
          path: "my-orders",
          element: (
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
};

export default App;
