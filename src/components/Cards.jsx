import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Cards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  console.log(data);
  const [p, setP] = useState([]);
  useEffect(() => {
    if (category) {
      const filterByCategory = [...data].filter(
        (categoryProduct) => categoryProduct.category === category
      );
      setP(filterByCategory);
    } else {
      setP(data.slice(0, 9));
    }
  }, [category, data]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {p.map((singleProduct) => (
        <Card
          key={singleProduct.productId}
          singleProduct={singleProduct}
        ></Card>
      ))}
    </div>
  );
};

export default Cards;
