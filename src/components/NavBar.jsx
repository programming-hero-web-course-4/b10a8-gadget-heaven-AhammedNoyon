import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import NavText from "./NavText";

const NavBar = () => {
  return (
    <div className="border p-2 rounded-xl">
      <div className=" bg-headerBg rounded-t-xl">
        <div className="navbar px-8 md:px-32 py-7  ">
          <div className="navbar-start">
            <a className="text-xl font-bold text-white">Gadget Heaven</a>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal gap-12 px-1 text-lg font-medium text-white">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/statistics">Statistics</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
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
                className="btn btn-ghost lg:hidden text-white "
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
                <NavLink to="/">Home</NavLink>
                <NavLink to="/statistics">Statistics</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <NavText></NavText>
    </div>
  );
};

export default NavBar;
