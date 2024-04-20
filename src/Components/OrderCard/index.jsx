import { AiTwotoneCloseCircle } from "react-icons/ai";

const OrderCard = (props) => {
  const { id, title, imageUrl, price, onDelete } = props;

  let renderCloseIcon;

  if (onDelete) {
    renderCloseIcon = <AiTwotoneCloseCircle className="text-blue-500" onClick={() => onDelete(id)} />;
  }

  return (
    <div className="pt-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
        </figure>
        <h4 className="text-sm font-light">{title}</h4>
      </div>
      <div className="flex flex-col items-center gap-2">
        {renderCloseIcon}
        <p className="text-lg font-medium">{price}</p>
      </div>
    </div>
  );
};

OrderCard.defaultProps = {
  id: 0,
  title: "Product name",
  imageUrl: "https://via.placeholder.com/150",
  price: "$10.00",
};

export default OrderCard;
