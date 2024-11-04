import PropType from "prop-types";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
const NavText = ({ title, subtitle, buttonText }) => {
  const location = useLocation();
  const [NavTextBg, setNavTextBg] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      setNavTextBg(true);
    }
    // else if (location.pathname === `/product/${[productId]}`) {
    //   setNavTextBg(true);
    // }
  }, [location]);
  return (
    <div>
      {/* hero */}
      <div
        className={`hero bg-headerBg ${
          NavTextBg === true ? "rounded-b-xl" : "rounded-xl"
        }`}
      >
        <div className="hero-content text-center">
          <div className="pb-64">
            <h1 className="text-[32px]  md:text-[44px] lg:text-[56px] font-bold text-white">
              {title}
            </h1>
            <p className="py-6 font-normal text-base text-footerBg w-full md:w-3/4 mx-auto">
              {subtitle}
            </p>
            <NavLink
              to="/dashboard"
              className="rounded-full text-xl font-bold  px-8 py-4 bg-white text-headerBg"
            >
              {buttonText}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

NavText.propTypes = {
  title: PropType.string,
  subtitle: PropType.string,
  buttonText: PropType.string,
};

export default NavText;
