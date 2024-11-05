import PropType from "prop-types";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";

const NavText = ({ title, subtitle, buttonText, buttonText2 }) => {
  const location = useLocation();
  const { productId } = useParams();
  const [NavTextBg, setNavTextBg] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      setNavTextBg(true);
    } else if (location.pathname === "/dashboard") {
      setNavTextBg("");
    } else if (location.pathname === `/contact`) {
      setNavTextBg(null);
    }
  }, [location, productId]);

  // const handleDashCart = useContext(AssetContext);
  return (
    <div>
      {/* hero */}
      <div
        className={`hero bg-headerBg ${
          NavTextBg === true ? "rounded-b-xl " : "rounded-xl"
        }`}
      >
        <div className="hero-content text-center">
          <div className={` ${NavTextBg === true ? "pb-64" : "pb-10"}`}>
            <h1 className="text-[32px]  md:text-[44px] lg:text-[56px] font-bold text-white">
              {title}
            </h1>
            <p className="py-6 font-normal text-base text-footerBg w-full md:w-3/4 mx-auto">
              {subtitle}
            </p>
            <div>
              {NavTextBg === true && (
                <NavLink
                  to="/dashboard"
                  className="rounded-full text-xl font-bold  px-8 py-4 bg-white text-headerBg"
                >
                  {buttonText}
                </NavLink>
              )}
              {/* {NavTextBg === "" && (
                <div>
                  <NavLink
                    onClick={handleDashCart}
                    to=""
                    className="rounded-full text-xl font-bold mr-4 px-8 py-4 bg-white text-headerBg"
                  >
                    {buttonText}
                  </NavLink>
                  <NavLink
                    to=""
                    className="rounded-full text-xl font-bold  px-8 py-4 bg-white text-headerBg"
                  >
                    {buttonText2}
                  </NavLink>
                </div>
              )} */}
            </div>
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
  buttonText2: PropType.string,
};

export default NavText;
