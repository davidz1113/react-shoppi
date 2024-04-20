import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiTwotonePlusCircle } from "react-icons/ai";

const Card = ({ item }) => {
  const context = useContext(ShoppingCartContext);

  const showProductDetail = () => {
    context.openProductDetail();
    context.closeCheckOutSideMenu();
    context.setProductToShow(item);
  };

  const addProductToCart = (event, product) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, product]);
    context.openCheckOutSideMenu();
    context.closeProductDetail();
  };

  const renderIcon = () => {
    const isInCart = context.cartProducts.find((product) => product.id === item.id);

    if (isInCart) {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full p-1 m-2"
          onClick={(event) => event.stopPropagation()}
        >
          <AiOutlineCheckCircle className="text-white" />
        </div>
      );
    }

    return (
      <div
        className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1 m-2"
        onClick={(event) => addProductToCart(event, item)}
      >
        <AiTwotonePlusCircle />
      </div>
    );
  };

  return (
    <div onClick={() => showProductDetail()} className="bg-white cursor-pointer w-56 h-60">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs p-1 mb-1 ml-1">
          {item.category.name}
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={item.images[0]} alt="headPhones" />
        {renderIcon()}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{item.title}</span>
        <span className="text-sm font-medium">{item.price}</span>
      </p>
    </div>
  );
};

export default Card;
