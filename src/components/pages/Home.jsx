import Banner from "../Banner";
import { Outlet, useLoaderData } from "react-router-dom";
import CategoriesSideBar from "../CategoriesSideBar";
import Heading from "../Heading";
import NavText from "../NavText";

const Home = () => {
  const categories = useLoaderData();
  // console.log(categories);
  return (
    <div>
      {/* banner */}
      <Banner></Banner>
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
