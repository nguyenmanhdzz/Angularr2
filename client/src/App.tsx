import { useRoutes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ProductsDetail from "./pages/ProductsDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Aboutus from "./components/Aboutus";
import Blog from "./components/Blog";
import Dashboard from "./components/dashboard/Dashboard";

const routeConfig = [
  { path: "/aboutus", element: <Aboutus /> },
  { path: "/blog", element: <Blog /> },
  {
    path: "/",
    element: <Homepage />,
  },
  { path: "/product/:id", element: <ProductsDetail /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/admin", element: <Dashboard /> },
];

function App() {
  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;
