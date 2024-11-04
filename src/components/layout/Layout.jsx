import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto">
      {/* navBar */}
      <NavBar></NavBar>
      {/* dynamic */}
      <div className="">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
