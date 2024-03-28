import { Outlet } from "react-router-dom";
import { Nav } from "../Components/Header/Nav";
import Footer from "../Components/Footer/footerD";
const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
