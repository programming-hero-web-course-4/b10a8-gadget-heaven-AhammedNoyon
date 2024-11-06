import Banner from "../Banner";
import { Outlet, useLoaderData } from "react-router-dom";
import CategoriesSideBar from "../CategoriesSideBar";
import Heading from "../Heading";

import { Helmet } from "react-helmet";

const Home = () => {
  const categories = useLoaderData();
  // console.log(categories);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* banner */}
      <div className="">
        <Banner></Banner>
      </div>
      {/* dynamic part*/}
      {/* Heading */}
      <Heading cardHeading="Explore Cutting-Edge Gadgets"></Heading>
      <div className="flex flex-col md:flex-row gap-10 mt-8 mb-24">
        <CategoriesSideBar categories={categories}></CategoriesSideBar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
