import { useRoutes, BrowserRouter, useNavigate } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import { NavBar } from "../../Components/Navbar";
import CheckOutSideMenu from "../../Components/CheckOutSideMenu";
import { ShoppingCartContext } from "../../Context";
import { useContext, useEffect } from "react";
import "./App.css";
import Layout from "../../Components/Layout";

const ProtectedRoute = ({ children }) => {
  const context = useContext(ShoppingCartContext);
  const { valueSign } = context;
  const navigate = useNavigate();

  useEffect(() => {
    if (!valueSign) {
      navigate("/sign-in");
    }
  }, [valueSign, navigate]);

  if (!valueSign) {
    return null;
  } else {
    return children;
  }
};

const homeProtected = () => {
  return (
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  );
};

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: homeProtected(),
      // element: <Home />,
    },
    {
      path: "/clothes",

      element: homeProtected(),
    },
    {
      path: "/electronics",
      element: homeProtected(),
    },
    {
      path: "/fornitures",
      element: homeProtected(),
    },
    {
      path: "/toys",
      element: homeProtected(),
    },
    {
      path: "/others",
      element: homeProtected(),
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/my-account",
      element: (
        <ProtectedRoute>
          <MyAccount />
        </ProtectedRoute>
      ),
    },
    {
      path: "/my-orders",
      element: (
        <ProtectedRoute>
          <MyOrders />
        </ProtectedRoute>
      ),
    },
    {
      path: "/my-order/:id",
      element: (
        <ProtectedRoute>
          <MyOrder />
        </ProtectedRoute>
      ),
    },
    {
      path: "/my-order/last",
      element: (
        <ProtectedRoute>
          <MyOrder />
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <NavBar />
          <Layout>
            <AppRoutes />
          </Layout>
          <CheckOutSideMenu />
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
};

export default App;
