import NavText from "../NavText";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/LocalStrage";
import DashboardCart from "../DashboardCart";
import DashboardWish from "../DashboardWish";
import { NavLink } from "react-router-dom";
// import sortBy from "sort-by";

const Dashboard = () => {
  const [LProduct, setLProduct] = useState([]);
  useEffect(() => {
    const storageData = getStoredCart();
    setLProduct(storageData);
  }, []);
  // console.log(LProduct);
  const [dashboardCart, setDashboardCart] = useState("cart");

  const handleDashboardCart = (tab) => {
    setDashboardCart(tab);
  };
  const handleSort = (sortBy) => {
    if (sortBy === "price") {
      const sorted = [...LProduct].sort((a, b) => b.price - a.price);
      setLProduct(sorted);
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="relative">
        <NavText
          title="Dashboard"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          // buttonText="Cart"
          // buttonText2="WishList"
        ></NavText>
        <div className="absolute top-48 left-16 md:left-60 lg:left-[650px] my-5 md:my-1">
          <NavLink
            onClick={() => handleDashboardCart("cart")}
            to=""
            className="rounded-full text-xl font-bold mr-4 px-8 py-4 bg-white text-headerBg"
          >
            Cart
          </NavLink>
          <NavLink
            onClick={() => handleDashboardCart("wishList")}
            to=""
            className="rounded-full text-xl font-bold  px-8 py-4 bg-white text-headerBg"
          >
            WishList
          </NavLink>
        </div>
      </div>
      <div className="flex justify-between items-center my-10">
        <div>
          {dashboardCart === "cart" && (
            <h3 className="text-xl font-bold">Cart</h3>
          )}
          {dashboardCart === "wishList" && (
            <h3 className="text-xl font-bold">Wish List</h3>
          )}
        </div>
        {dashboardCart === "cart" && (
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold">Total cost:</h3>
            <button
              onClick={() => handleSort("price")}
              className="flex border border-headerBg text-headerBg py-2 px-4 rounded-full text-lg font-bold"
            >
              <span>Sort by Price</span>
              <span>
                <svg
                  width="24.000000"
                  height="24.000000"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs>
                    <clipPath id="clip13_2554">
                      <rect
                        id="Frame"
                        rx="0.000000"
                        width="23.000000"
                        height="23.000000"
                        transform="translate(0.500000 0.500000)"
                        fill="white"
                        fill-opacity="0"
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id="Frame"
                    rx="0.000000"
                    width="23.000000"
                    height="23.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <g clip-path="url(#clip13_2554)">
                    <path
                      id="Vector"
                      d="M4.58 11.41C4.96 11.78 5.46 12 6 12C6.53 12 7.03 11.78 7.41 11.41C7.78 11.03 8 10.53 8 10C8 9.46 7.78 8.96 7.41 8.58C7.03 8.21 6.53 8 6 8C5.46 8 4.96 8.21 4.58 8.58C4.21 8.96 4 9.46 4 10C4 10.53 4.21 11.03 4.58 11.41Z"
                      stroke="#8332C5"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector"
                      d="M6 4L6 8"
                      stroke="#8332C5"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Vector"
                      d="M6 12L6 20"
                      stroke="#8332C5"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Vector"
                      d="M10.58 17.41C10.96 17.78 11.46 18 12 18C12.53 18 13.03 17.78 13.41 17.41C13.78 17.03 14 16.53 14 16C14 15.46 13.78 14.96 13.41 14.58C13.03 14.21 12.53 14 12 14C11.46 14 10.96 14.21 10.58 14.58C10.21 14.96 10 15.46 10 16C10 16.53 10.21 17.03 10.58 17.41Z"
                      stroke="#8332C5"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector"
                      d="M12 4L12 14"
                      stroke="#8332C5"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Vector"
                      d="M12 18L12 20"
                      stroke="#8332C5"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Vector"
                      d="M16.58 8.41C16.96 8.78 17.46 9 18 9C18.53 9 19.03 8.78 19.41 8.41C19.78 8.03 20 7.53 20 7C20 6.46 19.78 5.96 19.41 5.58C19.03 5.21 18.53 5 18 5C17.46 5 16.96 5.21 16.58 5.58C16.21 5.96 16 6.46 16 7C16 7.53 16.21 8.03 16.58 8.41Z"
                      stroke="#8332C5"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector"
                      d="M18 4L18 5"
                      stroke="#8332C5"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Vector"
                      d="M18 9L18 20"
                      stroke="#8332C5"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </span>
            </button>
            <button className="flex border bg-headerBg text-white py-2 px-4 rounded-full text-lg font-bold">
              Purchase
            </button>
          </div>
        )}
      </div>
      {dashboardCart === "cart" && (
        <div className="mb-24">
          {LProduct.map((singProduct) => (
            <DashboardCart
              singProduct={singProduct}
              key={singProduct.productId}
            ></DashboardCart>
          ))}
        </div>
      )}
      {dashboardCart === "wishList" && (
        <div className="mb-24">
          {LProduct.map((singProduct) => (
            <DashboardWish
              singProduct={singProduct}
              key={singProduct.productId}
            ></DashboardWish>
          ))}
        </div>
      )}{" "}
    </>
  );
};

export default Dashboard;
