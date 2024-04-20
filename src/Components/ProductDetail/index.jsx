import { AiTwotoneCloseCircle } from "react-icons/ai";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white p-6`}
    >
      <div className="flex justify-between items-center ">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={() => context.closeProductDetail()} className="cursor-pointer">
          <AiTwotoneCloseCircle className="text-blue-500" />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow && context.productToShow.images[0]}
          alt=""
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl">{context.productToShow && context.productToShow.price}</span>
        <span className="font-medium text-md">{context.productToShow && context.productToShow.title}</span>
        <span className="font-light text-sm">{context.productToShow && context.productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
