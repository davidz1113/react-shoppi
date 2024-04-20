import { AiTwotoneCloseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import "./styles.css";

const ListOrdersCard = (props) => {
  const { totalAmount, totalProducts, date, index } = props;

  //genera un algoritmo random de 1 hasta 8 con cada valor de colores de clases de borders de colores.
  const color = ["green", "red", "blue", "yellow", "gray", "pink", "purple", "orange"];

  const [colorState, setColorState] = useState("red");

  useEffect(() => {
    console.log(colorState);
    const randomColor = Math.floor(Math.random() * 7) + 1;
    setColorState(`${color[randomColor]}`);
    console.log(color[randomColor]);
  }, []);

  return (
    <div
      className={`border-l-8 list-orders-border-left-${colorState} shadow-lg pt-3 flex justify-between gap-4 items-center p-4 rounded-lg border border-r-black border-b-black border-t-black mb-4 relative`}
    >
      <p className="border-l flex flex-col">
        <span className="font-light">Order N</span>
        <span className="text-center">{index + 1}</span>
      </p>
      <div className="flex flex-col">
        <span className="font-light">Date</span>
        <span>{date}</span>
      </div>
      <div>
        <p className="font-light">Total amount</p>
        <p className=" w-full text-center">$ {totalAmount}</p>
      </div>
      <div>
        <p className="font-light">Total products</p>
        <p className=" w-full text-center">{totalProducts}</p>
      </div>
      <div>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

ListOrdersCard.defaultProps = {
  id: 0,
  title: "Product name",
  imageUrl: "https://via.placeholder.com/150",
  price: "$10.00",
};

export default ListOrdersCard;
