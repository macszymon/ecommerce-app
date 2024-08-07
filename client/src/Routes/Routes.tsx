import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../Pages/Home/Home";

const Layout = () => {
  return (
      <>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Home />,
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
        element: <Home />,
      },
      {
        path: "/search/:input",
        element: <Home />,
      },
      {
        path: "/faq",
        element: <Home />,
      },
      {
        path: "/about",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Home />,
      },
      {
        path: "/men/:collection/:type?",
        element: <Home />,
      },
      {
        path: "/women/:collection/:type?",
        element: <Home />,
      },
    ],
  },
]);
