import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import "./App.css";
import SingleProduct from "./features/products/SingleProduct";
const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop/:id",
          element: <SingleProduct />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
