const NavText = () => {
  return (
    <div>
      {/* hero */}
      <div className="hero bg-headerBg rounded-b-xl relative">
        <div className="hero-content text-center">
          <div className="pb-64">
            <h1 className="text-[32px]  md:text-[44px] lg:text-[56px] font-bold text-white">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6 font-normal text-base text-footerBg w-full md:w-3/4 mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="rounded-full text-xl font-bold  px-8 py-4 bg-white text-headerBg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavText;
