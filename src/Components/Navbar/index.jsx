import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const NavBar = () => {
  const activeStyle = "underline underline-offset-4";
  const context = useContext(ShoppingCartContext);

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/clothes" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to="/electronics" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to="/fornitures" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Fornitures
          </NavLink>
        </li>
        <li>
          <NavLink to="/toys" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to="/others" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className={`${!context.valueSign ? "hidden" : "block"} text-black/60`}>{context.valueUser.email}</li>
        <li className={`${!context.valueSign ? "hidden" : "block"}`}>
          <NavLink to="/my-orders" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            My orders
          </NavLink>
        </li>
        <li className={`${!context.valueSign ? "hidden" : "block"}`}>
          <NavLink to="/my-account" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            My Account
          </NavLink>
        </li>
        <li onClick={()=> context.setLocalStorageSing(false)}>
          <NavLink to="/sign-in" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            {context.valueSign ? "Sign out" : " Sign In"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            <div className="relative">
              <p className="bg-slate-300 text-center rounded-lg flex justify-center absolute top-2 left-2 pr-1 pl-1">
                <span className="text-xs">{context.cartProducts.length}</span>
              </p>
              <BsCart />
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };
