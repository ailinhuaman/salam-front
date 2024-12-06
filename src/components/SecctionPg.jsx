import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import apiRequest from "../api/coneccion";
import { useNavigate } from "react-router-dom";

export default function SecctionPg({
  title = "Productos",
  icon,
  apiEndpoint,
  categoryId,
  backgroundImage,
  backgroundColor = "#87ceeb",
  baseUrl,
}) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await apiRequest(
        `${baseUrl}/${apiEndpoint}/${categoryId}`,
        "POST",
        {
          skip,
          limit: 10,
          category_id: categoryId,
        }
      );

      setProducts((prev) => [...prev, ...response]);
      setHasMore(response.length === 10);
    } catch (err) {
      setHasMore(false);
      setError("Error al cargar los productos.");
    } finally {
      setLoading(false);
    }
  };

  const searchProducts = async () => {
    if (!searchTerm.trim()) return fetchProducts();
    setLoading(true);
    try {
      const response = await apiRequest(
        `${baseUrl}/products/products-buscar/?`,
        "GET",
        {
          nombre: searchTerm,
          category_id: categoryId,
          skip: skip,
          limit: 10,
        }
      );
      setProducts(response);
      setHasMore(false);
      setError(null);
    } catch (err) {
      setError("Producto no encontrado.");
      console.error(err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!searchTerm) fetchProducts();
  }, [skip]);

  const handleSearch = (e) => {
    e.preventDefault();
    setProducts([]);
    if (searchTerm.trim()) {
      searchProducts(searchTerm);
    } else {
      // Si no hay término, reiniciar la lista de productos
      setError(null);

      setSkip(0);
      fetchProducts();
    }
  };

  return (
    <div className="min-h-screen">
      <div
        className="relative h-auto bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="w-full h-full bg-black/40">
          <Navbar />
          <h2 className="h-80 py-36  jua-regular text-5xl  md:text-7xl w-full py-8 md:py5 text-center text-white flex flex-col items-center gap-6">
            {title}
            {icon && <div className="w-12 h-12">{icon}</div>}
          </h2>
          {/* svg separator */}
          <div className=" w-full absolute bottom-0">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className={`w-full rotate-180 fill-[${backgroundColor}] -mb-1`}
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className={`bg-[${backgroundColor}] bg-huellas`}>
        <main className="mx-auto max-w-5xl px-4 py-8">
          <div className="mb-12 flex justify-center">
            <form
              className="relative w-full max-w-md mb-12"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                placeholder="Busca tu producto"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full px-6 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-xl"
              />
            </form>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-lg bg-white p-4 shadow-sm shadow-xl"
              >
                <div className="aspect-square w-full rounded-lg bg-gray-100 border">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium capitalize">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 line-clamp-1">
                      {product.description}
                    </p>
                    <p className="text-gray-600">S/ {product.price}</p>
                  </div>
                  <button
                    className="h-10 w-10 grid place-content-center rounded-lg bg-[#004AAD]"
                    onClick={() => navigate(`/detalle/${product.id}`)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      color="white"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart "
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 17h-11v-14h-2" />
                      <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          {loading && <p className="text-center">Cargando...</p>}
          {hasMore && (
            <div className="mt-8 text-center">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                onClick={() => setSkip((prev) => prev + 10)}
              >
                Cargar más
              </button>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
