import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/user/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: username, // Reemplaza por el nombre de usuario
          password: password, // Reemplaza por la contraseña
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Guardar el token JWT en localStorage
        localStorage.setItem("token", data.access_token);
        // Redireccionar a la página del panel de administrador
        navigate("/admin");
      } else {
        setError("Login failed: " + data.detail);
      }
    } catch (error) {
      setError("An error occurred: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#004AAD]">
      <div className="w-full max-w-md text-white border rounded-lg shadow-lg bg-white">
        <div className="p-6">
          <a href="/" className="text-gray-500 mb-4 flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l4 4" />
              <path d="M5 12l4 -4" />
            </svg>{" "}
            Volver
          </a>
          <h2 className="text-2xl font-bold mb-2 text-black">Login</h2>
          <p className="text-gray-400 mb-6">Bienvenido de nuevo</p>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label htmlFor="email" className="text-black">
                Usuario
              </label>
              <input
                type="text"
                id="username"
                placeholder="ailin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-transparent text-black border border-gray-400 focus:border-white p-3 rounded-md w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-black">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-transparent text-black border border-gray-400 focus:border-white p-3 rounded-md w-full"
              />
            </div>
            {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
            <div className="px-6 py-4 bg-gray-750 rounded-b-lg ">
              <button
                type="submit"
                className="w-full bg-green-500 p-3 rounded-md text-gray-900 hover:bg-gray-200 mb-4"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
