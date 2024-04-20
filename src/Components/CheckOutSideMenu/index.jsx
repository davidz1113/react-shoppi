import { AiTwotoneCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";

const CheckOutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter((product) => product.id !== id);
    context.setCartProducts(filteredProducts);
    context.setCount(context.count - 1);
  };

  const sumCartProducts = () => {
    return context.cartProducts.reduce((acc, product) => acc + product.price, 0);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date().toLocaleDateString(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalAmount: sumCartProducts(),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };

  return (
    <aside
      className={`${
        context.isCheckOutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white p-6 scrollable-cards`}
    >
      <div className="flex justify-between items-center ">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={() => context.closeCheckOutSideMenu()} className="cursor-pointer">
          <AiTwotoneCloseCircle className="text-blue-500" />
        </div>
      </div>

      {context.cartProducts.map((product) => {
        return (
          <OrderCard
            key={product.id}
            title={product.title}
            id={product.id}
            imageUrl={product.images[0]}
            price={product.price}
            onDelete={() => handleDelete(product.id)}
          />
        );
      })}

      <div className="sticky footer-total  bg-white">
        <div className=" mt-2  flex justify-between  items-center">
          <p className="font-light">Total:</p>
          <p className="font-medium text-lg">${sumCartProducts()}</p>
        </div>

        <Link to='/my-order/last'>
          <button className="btn-checkout text-white rounded-lg p-2 bg-black" onClick={() => handleCheckout()}>
            CheckOut
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckOutSideMenu;
