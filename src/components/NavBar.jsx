import { NavLink, useLocation, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import NavText from "./NavText";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const { productId } = useParams();
  const location = useLocation();
  const [navBg, setNavBg] = useState("white");
  useEffect(() => {
    if (location.pathname === "/") {
      setNavBg("headerBg");
    } else {
      setNavBg("white");
    }
  }, [location]);
  return (
    <div className="border p-2 rounded-xl relative">
      <div className={`bg-${navBg}`}>
        <div className="navbar px-8 md:px-32 py-7  ">
          <div className="navbar-start">
            <a
              className={`text-xl font-bold ${
                navBg === "headerBg" ? "text-white" : ""
              }`}
            >
              Gadget Heaven
            </a>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul
              className={`menu menu-horizontal gap-12 px-1 text-lg font-medium ${
                navBg === "headerBg" ? "text-white" : ""
              } items-center`}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " bg-black text-warning shadow-sm p-2 rounded-xl"
                    : ""
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " bg-black text-warning shadow-sm p-2 rounded-xl"
                    : ""
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " bg-black text-warning shadow-sm p-2 rounded-xl"
                    : ""
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " bg-black text-warning shadow-sm p-2 rounded-xl"
                    : ""
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <NavLink className="mr-4 text-2xl border-2 p-2 rounded-full bg-white hidden md:block">
              <FaShoppingCart />
            </NavLink>
            <NavLink className="text-2xl border-2 p-2 rounded-full bg-white hidden md:block">
              <FaRegHeart />
            </NavLink>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className={`btn btn-ghost lg:hidden ${
                  navBg === "headerBg" ? "text-white" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 -ml-16 p-2 shadow text-lg font-bold"
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " bg-black text-warning shadow-sm p-2 rounded-xl"
                      : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " bg-black text-warning shadow-sm p-2 rounded-xl"
                      : ""
                  }
                  to="/statistics"
                >
                  Statistics
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " bg-black text-warning shadow-sm p-2 rounded-xl"
                      : ""
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {navBg === "headerBg" && (
        <NavText
          title="Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
          subtitle="Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!"
          buttonText="Shop Now"
        ></NavText>
      )}
      <ToastContainer position="top-center" autoClose={2000} />;
    </div>
  );
};

export default NavBar;
