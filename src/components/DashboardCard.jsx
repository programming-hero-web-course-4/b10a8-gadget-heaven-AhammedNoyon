import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DashboardCard = () => {
  const { productId } = useParams();
  // console.log(productId);
  const data = useLoaderData();
  const [addToDash, setAddToDash] = useState({});
  useEffect(() => {
    const perProduct = data.find((product) => product.productId == productId);
    setAddToDash(perProduct);
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
  } = addToDash;
  return (
    <div className="shadow-xl rounded-xl p-8 flex justify-between  border mb-24">
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
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold">delete</h3>
      </div>
    </div>
  );
};

export default DashboardCard;
