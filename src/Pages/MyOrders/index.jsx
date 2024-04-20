import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import ListOrdersCard from "../../Components/ListOrdersCard";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  const { order } = context;
  return (
    <div>
      <h1 className="mb-4">My Orders</h1>
      {order.map((order, index) => {
        return (
          <Link to={`/my-order/${index}`} key={index}>
            <ListOrdersCard
              key={index}
              index={index}
              date={order.date}
              totalProducts={order.totalProducts}
              totalAmount={order.totalAmount}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default MyOrders;
