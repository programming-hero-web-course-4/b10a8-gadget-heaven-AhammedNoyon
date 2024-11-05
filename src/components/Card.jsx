import PropType from "prop-types";
import { useNavigate } from "react-router-dom";
const Card = ({ singleProduct }) => {
  // console.log(singleProduct);
  const {
    productId,
    productTitle,
    productImage,
    // category,
    price,
    // description,
    // specification,
    // availability,
    // rating,
  } = singleProduct;
  // const { productId } = useParams();
  const navigate = useNavigate();
  const handleView = () => {
    navigate(`/product/${productId}`);
  };
  return (
    <div className="border p-4 rounded-xl h-fit space-y-4 shadow-xl">
      <img
        className="w-full mx-auto h-[300px] rounded-xl "
        src={productImage}
        alt=""
      />
      <h3 className="text-3xl font-bold">{productTitle}</h3>
      <p>
        <small className="text-lg font-medium text-gray-600">
          Price: {price}
        </small>
      </p>
      <button
        onClick={() => handleView()}
        className="text-headerBg border-2 border-headerBg text-xl font-medium rounded-full p-2 px-4 mb-5"
      >
        View Details
      </button>
    </div>
  );
};
Card.propTypes = {
  singleProduct: PropType.object,
};
export default Card;
