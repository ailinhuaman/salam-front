import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Perros from "./pages/Perros.jsx";
import Gatos from "./pages/Gatos.jsx";
import DetalleProducto from "./pages/DetalleProducto.jsx";
import NotFound from "./pages/NotFound.jsx";
import TermsAndConditions from "./pages/Terminos.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import LoginRegister from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Perros />,
    errorElement: <NotFound />,
  },
  {
    path: "/gatos",
    element: <Gatos />,
  },
  {
    path: "/detalle/:prodId",
    element: <DetalleProducto />,
  },
  {
    path: "/terminos",
    element: <TermsAndConditions />,
  },
  {
    path: "/nosotros",
    element: <Nosotros />,
  },
  {
    path: "/login",
    element: <LoginRegister />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
