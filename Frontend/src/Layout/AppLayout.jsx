import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavLinks from "../components/NavLinks";

const AppLayout = () => {
  return (
    <>
      <Header />
      <NavLinks/>

      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default AppLayout;
