import { useEffect, useState } from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import NavText from "../NavText";
import {
  addCartInStore,
  addWishList,
  getStoredCart,
} from "../../utilities/LocalStrage";

const ProductDetails = () => {
  const { productId } = useParams();
  // console.log(productId);
  const data = useLoaderData();
  const [pDetails, setPDetails] = useState({});
  useEffect(() => {
    const perProduct = data.find((product) => product.productId == productId);
    setPDetails(perProduct);
  }, [data, productId]);
  const {
    productTitle,
    productImage,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = pDetails;
  // console.log(specification);

  const location = useLocation();
  const [navText, setNavText] = useState(false);
  const [store, setStore] = useState(false);
  useEffect(() => {
    if (location.pathname === `/product/${productId}`) {
      setNavText(true);
    }
  }, [location, productId]);
  useEffect(() => {
    const getCartCollectionByCall = getStoredCart();
    const isExist = getCartCollectionByCall.find(
      (item) => item.productId === pDetails.productId
    );
    if (isExist) {
      setStore(true);
    }
  }, [pDetails]);

  const handleAddCard = () => {
    addCartInStore(pDetails);
  };
  const handleHeart = () => {
    addWishList(pDetails);
    setStore(true);
  };

  return (
    <>
      ,
      {navText === true && (
        <NavText
          title="Product Details"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          buttonText="Shop Now"
        ></NavText>
      )}
      <div className="relative flex justify-center mb-[500px] lg:mb-96 mt-52">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 shadow-xl p-8 rounded-xl w-3/5 mx-auto  absolute bg-white -mt-64 ">
          <div className="col-span-2">
            <img
              className="w-full h-full object-fill rounded-xl"
              src={productImage}
              alt=""
            />
          </div>
          <div className="col-span-3 space-y-2">
            <h3 className="text-3xl font-bold">{productTitle}</h3>
            <p className="text-xl font-medium">
              <small>Price: ${price}</small>
            </p>
            <p className="text-green-700 border-green-700 bg-green-100 border rounded-full py-2 px-4 w-fit">
              {availability}
            </p>
            <p className="text-gray-600 font-extralight">{description}</p>

            <div>
              <h3 className="text-xl font-medium mb-4">Specification</h3>
              <ol className="text-gray-500 space-y-2">
                {specification?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            </div>

            <h3 className="flex gap-1 items-center">
              <span>Rating</span>
              <span className="border h-4 w-4 bg-black"></span>
            </h3>
            <h3 className="flex gap-8">
              <span>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </span>
              <span>{rating}</span>
            </h3>
            <div className="flex gap-8">
              <button
                onClick={handleAddCard}
                className="btn bg-headerBg rounded-full text-white font-bold text-base"
              >
                <span>Add to card icon</span>
                <span className="text-white">
                  <FaShoppingCart />
                </span>
              </button>
              <button
                disabled={store}
                onClick={handleHeart}
                className="btn rounded-full"
              >
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
