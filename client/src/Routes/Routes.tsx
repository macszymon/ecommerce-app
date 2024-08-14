import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Product from "../Pages/Product/Product";
import ScrollToTop from "../helpers/ScrollToTop";
import Faq from "../Pages/Faqs/Faqs";
import Search from "../Pages/Search/Search";
import Error from "../Pages/Error/Error";
import { AppProvider } from "../context/appContext";
import Cart from "../Pages/Cart/Cart";

const Layout = () => {
  return (
    <>
      <AppProvider>
        <ScrollToTop />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </AppProvider>
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/search/:input",
        element: <Search />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/:gender/:collection/:type?",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);
