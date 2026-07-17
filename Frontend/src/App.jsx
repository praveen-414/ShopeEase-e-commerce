import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);

  useEffect(() => {
    if (theme == "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
  return <>
 <Toaster position="top-center" reverseOrder={false} />
  <RouterProvider router={routes}></RouterProvider>
  
  </>
};

export default App;
