import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { useContext } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") {
    index = context.order.length - 1;
  }
  const product = context.order?.[index] || { products: [] }; 

  return (
    <div>
      <div className="flex w-80 items-center justify-center relative mb-4">
        <Link to="/my-orders" className="absolute left-0">
          <AiOutlineArrowLeft className="cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col">
        {product.products.map((product) => {
          return (
            <OrderCard
              key={product.id}
              title={product.title}
              id={product.id}
              imageUrl={product.images[0]}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyOrder;
