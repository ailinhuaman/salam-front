import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import Empresas from "./Empresas.jsx";
import Perros from "./pages/Perros.jsx";
import Gatos from "./pages/Gatos.jsx";
import DetalleProducto from "./pages/DetalleProducto.jsx";
import NotFaund from "./pages/NotFaund.jsx";
import TermsAndConditions from "./pages/Terminos.jsx";
import Dashboard from "./pages/Dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Perros />} />
      <Route path="*" element={ <NotFaund/>}/>
      <Route path="/gatos" element={<Gatos />} />
      <Route path="/empresas" element={<Empresas />} />
      <Route path="/detalle/:prodId" element={<DetalleProducto />} />
      <Route path="/terminos" element={<TermsAndConditions />} />
      <Route path="/prueba" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);
