import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-11/12 md:w-4/5 mx-auto mb-14">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Gadget Heaven</h3>
          <p className="text-gray-400">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="border my-8"></div>
        <footer className=" flex flex-col md:flex-row justify-center gap-[20px] md:gap-[168px] text-center md:text-start bg-footerBg shadow-sm ">
          <div className="flex flex-col">
            <h6 className="text-xl font-bold mb-4">Services</h6>
            <NavLink className="text-gray-600">Product Support</NavLink>
            <NavLink className="text-gray-600">Order Tracking</NavLink>
            <NavLink className="text-gray-600">Shipping & Delivery</NavLink>
            <NavLink className="text-gray-600">Returns</NavLink>
          </div>
          <div className="flex flex-col">
            <h6 className="text-xl font-bold mb-4">Company</h6>
            <NavLink className="text-gray-600">About us</NavLink>
            <NavLink className="text-gray-600">Careers</NavLink>
            <NavLink className="text-gray-600">Contact</NavLink>
          </div>
          <div className="flex flex-col">
            <h6 className="text-xl font-bold mb-4">Legal</h6>
            <NavLink className="text-gray-600">Terms of use</NavLink>
            <NavLink className="text-gray-600">Privacy policy</NavLink>
            <NavLink className="text-gray-600">Cookie policy</NavLink>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
