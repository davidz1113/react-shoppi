import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);
  const { setSearchByTitle, searchByTitle, filteredItems, setSearchByCategory } = context;

  // console.log('Aqui entro primero')

  const categoryPath = window.location.pathname.split("/")[1];

  useEffect(() => {
    setSearchByCategory(categoryPath);
  }, [categoryPath]);

  const renderView = () => {
    if (filteredItems?.length === 0) return <h1> There aren't any products related </h1>;
    return filteredItems?.map((item) => <Card key={item.id} item={item}></Card>);
  };

  return (
    <div>
      <div>
        <h1 className="mb-4 text-center">Exclusive Products</h1>
      </div>

      <div className="text-center">
        <input
          type="text"
          placeholder="Search products"
          className="rounded-lg border border-black p-4 w-80 mb-4 focos:outline-none"
          value={searchByTitle}
          onChange={(event) => setSearchByTitle(event.target.value)}
        />
      </div>
      <h4 className="mb-4">
        Buscando por: <span className="font-bold">{searchByTitle}</span>
      </h4>

      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
        <ProductDetail />
      </div>
    </div>
  );
}

export default Home;
