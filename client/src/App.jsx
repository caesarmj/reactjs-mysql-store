import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/user/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./assets/styles/main.scss";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <div>Produk</div>,
      },
      {
        path: "/products/:slug",
        element: <div>Single Page</div>,
      },
      {
        path: "/profile",
        element: <div>Profile</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
