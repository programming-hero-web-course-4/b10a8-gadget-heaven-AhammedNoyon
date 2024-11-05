import NavText from "../NavText";
import contactImg from "../../assets/contact.jpg";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact-Us</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <NavText
          title="Contact Us"
          subtitle="If you have any queries about Deshi-Commerce,please call us at please call us at +88017****** or contact us via this form."
        ></NavText>
      </div>
      <div className="grid grid-cols-2 gap-8 items-center">
        <div>
          <img className="w-full" src={contactImg} alt="" />
        </div>
        <div>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-headerBg text-white font-bold text-xl">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
