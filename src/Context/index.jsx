import { createContext } from "react";
import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping cart count
  const [count, setCount] = useState(0);

  // Product detail, open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product detail, show product
  const [productToShow, setProductToShow] = useState(null);

  // Cart products - shopping cart - add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // checkout side menu open/close
  const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);
  const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true);
  const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false);

  //Shopping cart - order
  const [order, setOrder] = useState([]);

  // get proucts
  const [items, setItems] = useState(null);

  // search by title
  const [searchByTitle, setSearchByTitle] = useState("");

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  //items filtered
  const [filteredItems, setFilteredItems] = useState(items);

  const filteredItemsByTitle = () => {
    if (searchByTitle === "") {
      return items;
    }

    return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
  };

  //search by category
  const [searchByCategory, setSearchByCategory] = useState("");

  const filteredItemsByCategoryAndTitle = () => {
    if (searchByCategory === "") {
      return items;
    }

    return items?.filter(
      (item) =>
        item.category.name.toLowerCase() === searchByCategory.toLowerCase() &&
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  //Se ejecuta la primera vez cuando el item es setado por el efecto, luego ya empieza a escuchar el cambio de searchByTitle y del searchByCategory
  useEffect(() => {
    if (!searchByCategory) {
      setFilteredItems(filteredItemsByTitle());
    } else {
      setFilteredItems(filteredItemsByCategoryAndTitle());
    }
  }, [items, searchByTitle, searchByCategory]);

  //useState de localstorage
  const { value: valueUser, setLocalStorage: setLocalStorageUser } = useLocalStorage("user", {
    name: "",
    email: "",
    password: "",
  });
  const { value: valueSign, setLocalStorage: setLocalStorageSing } = useLocalStorage("isSignedIn", false);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckOutSideMenuOpen,
        openCheckOutSideMenu,
        closeCheckOutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setSearchByCategory,
        valueUser,
        setLocalStorageUser,
        setLocalStorageSing,
        valueSign,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
