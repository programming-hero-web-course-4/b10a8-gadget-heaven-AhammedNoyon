import PropType from "prop-types";
import { IoIosCloseCircleOutline } from "react-icons/io";
const DashboardWish = ({ singProduct }) => {
  const {
    productTitle,
    productImage,

    price,
    description,
  } = singProduct;
  return (
    <div className="shadow-xl rounded-xl p-8 flex justify-between  border mb-4">
      <div className="flex gap-4 ">
        <div className="h-30 w-40 rounded-xl">
          <img className="w-full h-full rounded-xl" src={productImage} alt="" />
        </div>
        <div className="space-y-2">
          <h3 className=" text-2xl font-bold">
            <span>{productTitle}</span>
          </h3>
          <p className="text-gray-500">{description}</p>
          <p className="text-lg font-bold">
            <small>price: {price}</small>
          </p>
          <button className="bg-headerBg py-2 px-4 rounded-full text-lg text-white font-bold">
            Add to Card
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-4xl font-bold">
          <IoIosCloseCircleOutline />
        </h3>
      </div>
    </div>
  );
};
DashboardWish.propTypes = {
  singProduct: PropType.object,
};
export default DashboardWish;
