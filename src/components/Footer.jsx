import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="text-center">
        <h3 className="text-2xl font-bold">Gadget Heaven</h3>
        <p className="text-gray-400">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="border my-8"></div>
      <footer className=" flex flex-col md:flex-row justify-center gap-[20px] md:gap-[168px] text-center md:text-start bg-footerBg shadow-sm ">
        <div className="flex flex-col">
          <h6 className="footer-title">Services</h6>
          <NavLink className="link link-hover">Branding</NavLink>
          <NavLink className="link link-hover">Design</NavLink>
          <NavLink className="link link-hover">Marketing</NavLink>
          <NavLink className="link link-hover">Advertisement</NavLink>
        </div>
        <div className="flex flex-col">
          <h6 className="footer-title">Company</h6>
          <NavLink className="link link-hover">About us</NavLink>
          <NavLink className="link link-hover">Contact</NavLink>
          <NavLink className="link link-hover">Jobs</NavLink>
          <NavLink className="link link-hover">Press kit</NavLink>
        </div>
        <div className="flex flex-col">
          <h6 className="footer-title">Legal</h6>
          <NavLink className="link link-hover">Terms of use</NavLink>
          <NavLink className="link link-hover">Privacy policy</NavLink>
          <NavLink className="link link-hover">Cookie policy</NavLink>
        </div>
      </footer>
    </>
  );
};

export default Footer;
