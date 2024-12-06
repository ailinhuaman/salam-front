import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null -> cargando
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login"); // Redirige si no hay token
        return;
      }

      try {
        const response = await fetch("http://127.0.0.1:8000/user/userme", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Unauthorized");
        }

        setIsAuthenticated(true); // Autenticado correctamente
      } catch (error) {
        console.error("Authentication error:", error);
        localStorage.removeItem("token");
        navigate("/login"); // Redirige si hay error
      }
    };

    checkAuth();
  }, [navigate]);

  if (isAuthenticated === null) return <Spinner />; // Mostrando el Spinner mientras carga

  return children; // Muestra la ruta protegida si está autenticado
};

export default ProtectedRoute;



const Spinner = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-400">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
      </div>
    );
  };
  

  