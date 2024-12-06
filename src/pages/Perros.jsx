import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import apiRequest from "../api/coneccion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import SecctionPg from "../components/SecctionPg";

export default function Perros() {
  // const navigate = useNavigate();

  // const [products, setProducts] = useState([]); // Lista de productos
  // const [skip, setSkip] = useState(0); // Controlar la paginación
  // const [loading, setLoading] = useState(false); // Control de carga
  // const [searchTerm, setSearchTerm] = useState(""); // Input de búsqueda
  // const [hasMore, setHasMore] = useState(true); // Verificar si hay más productos
  // const [error, setError] = useState(null); // Manejo de errores

  // // Función para cargar productos paginados
  // const fetchProducts = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await apiRequest(
  //       "https://salam-back.onrender.com/products/1?",
  //       "POST",
  //       { skip: skip, limit: 10 } // Parámetros de consulta
  //     );

  //     setProducts((prev) => [...prev, ...response]); // Añadir productos a la lista
  //     setHasMore(response.length === 10); // Verificar si hay más productos
  //   } catch (err) {
  //     console.error("Error al obtener productos:", err);
  //     setError("Error al cargar los productos.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // // Efecto para cargar productos al inicio o al cambiar el `skip`
  // useEffect(() => {
  //   if (!searchTerm) fetchProducts();
  // }, [skip]);

  // // Incrementar `skip` para cargar más productos
  // const loadMore = () => {
  //   setSkip((prev) => prev + 10);
  // };
  // // Función para buscar productos por nombre
  // const searchProducts = async (name) => {
  //   setLoading(true);
  //   try {
  //     const response = await apiRequest(
  //       "https://salam-back.onrender.com/products/productos-buscar/?",
  //       "GET",
  //       { nombre:name,skip: skip, limit: 10,category_id:1 } // Parámetros de consulta
  //     );

  //     // const searchResults = response.data || []; // Asegurar que sea un array
  //     setProducts(response); // Sobrescribir con resultados de búsqueda
  //     setError(null);
  //     setHasMore(false); // Evitar cargar más al buscar

  //   } catch (err) {
  //     console.error("Error en la búsqueda:", err);
  //     setError("Producto no encontrado.");
  //     setProducts([]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // // Manejar la búsqueda al enviar el formulario
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (searchTerm.trim()) {
  //     searchProducts(searchTerm);
  //   }
  //    else {
  //     // Si no hay término, reiniciar la lista de productos
  //     setError(null)
  //     setSkip(0);
  //     setProducts([]);
  //     fetchProducts();
  //   }
  // };

  return (
    // <div className="min-h-screen ">
    //   <div
    //     className="relative h-auto bg-cover bg-center"
    //     style={{
    //       backgroundImage: `url('https://i.ytimg.com/vi/sFbt7Icd9RI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB1Cw8fjqgpvwem1e8Yffvg1Nuzeg')`,
    //     }}
    //   >
    //     <div className=" w-full h-full  bg-black/40">
    //       <Navbar />
    //       {/* title page */}
    //       <h2 className="py-28 jua-regular text-5xl  md:text-7xl w-full py-8 md:py5 text-center text-white flex flex-col items-center gap-6">
    //         Productos para Perros
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width={74}
    //           height={74}
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth={3}
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           className="icon icon-tabler icons-tabler-outline icon-tabler-dog"
    //         >
    //           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //           <path d="M11 5h2" />
    //           <path d="M19 12c-.667 5.333 -2.333 8 -5 8h-4c-2.667 0 -4.333 -2.667 -5 -8" />
    //           <path d="M11 16c0 .667 .333 1 1 1s1 -.333 1 -1h-2z" />
    //           <path d="M12 18v2" />
    //           <path d="M10 11v.01" />
    //           <path d="M14 11v.01" />
    //           <path d="M5 4l6 .97l-6.238 6.688a1.021 1.021 0 0 1 -1.41 .111a.953 .953 0 0 1 -.327 -.954l1.975 -6.815z" />
    //           <path d="M19 4l-6 .97l6.238 6.688c.358 .408 .989 .458 1.41 .111a.953 .953 0 0 0 .327 -.954l-1.975 -6.815z" />
    //         </svg>
    //       </h2>
    //       {/* svg separator */}
    //       <div className="w-full absolute bottom-0">
    //         <svg
    //           data-name="Layer 1"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 1200 120"
    //           preserveAspectRatio="none"
    //           className="w-full rotate-180 fill-[#87ceeb] -mb-1"
    //         >
    //           <path
    //             d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
    //             opacity=".25"
    //             className="shape-fill"
    //           ></path>
    //           <path
    //             d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
    //             opacity=".5"
    //             className="shape-fill"
    //           ></path>
    //           <path
    //             d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
    //             className="shape-fill"
    //           ></path>
    //         </svg>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="bg-[#87ceeb] z-20 bg-huellas">
    //     {/* Main Content */}
    //     <main className="mx-auto max-w-5xl px-4 py-8">
    //       {/* Search Bar */}
    //       <div className="mb-12 flex justify-center">
    //         <form className="relative w-full max-w-md" onSubmit={handleSearch}>
    //           <input
    //             type="text"
    //             placeholder="Busca tu producto"
    //             onChange={(e)=>setSearchTerm(e.target.value)}
    //             value={searchTerm}
    //             className="w-full rounded-full px-6 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-xl"
    //           />
    //           {/* <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" /> */}
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={24}
    //             height={24}
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth={2}
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="icon icon-tabler icons-tabler-outline icon-tabler-search absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400"
    //           >
    //             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //             <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    //             <path d="M21 21l-6 -6" />
    //           </svg>
    //         </form>
    //       </div>

    //       {/* Product Grid */}
    //       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
    //         {products.map((product) => (
    //           <div
    //             key={product.id}
    //             className="overflow-hidden rounded-lg bg-white p-4 shadow-sm shadow-xl"
    //           >
    //             <div className="aspect-square w-full rounded-lg bg-[#004AAD] border">
    //               <img
    //                 src={product.image_url}
    //                 alt=""
    //                 className="w-full h-full object-cover shadown-lg"
    //               />
    //             </div>

    //             <div className="mt-4 flex items-center justify-between">
    //               <div>
    //                 <h3 className="text-lg font-medium capitalize">
    //                   {product.name}
    //                 </h3>
    //                 <p className="text-gray-600 line-clamp-1 ">
    //                   {product.description}
    //                 </p>
    //                 <p className="text-gray-600">S/ {product.price}</p>
    //               </div>
    //               <button
    //                 className="h-10 w-10 grid place-content-center rounded-lg  bg-[#004AAD]"
    //                 onClick={() => navigate(`/detalle/${product.id}`)}
    //               >
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   width={24}
    //                   height={24}
    //                   viewBox="0 0 24 24"
    //                   fill="none"
    //                   color="white"
    //                   stroke="currentColor"
    //                   strokeWidth={2}
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart "
    //                 >
    //                   <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //                   <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    //                   <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    //                   <path d="M17 17h-11v-14h-2" />
    //                   <path d="M6 5l14 1l-1 7h-13" />
    //                 </svg>
    //               </button>
    //             </div>
    //           </div>
    //         ))}
    //         {loading && <p className="text-center">Cargando...</p>}
    //         {error && <p className="text-red-500 text-center">{error}</p>}
    //       </div>

    //       {/* Pagination */}
    //       <div className="mt-8 flex justify-center gap-2">
    //         {/* <button className="h-10 w-10 rounded-lg bg-white shadow-sm" />
    //         <button className="h-10 w-10 rounded-lg bg-white shadow-sm" /> */}
    //         {hasMore && !loading && (
    //           <div className="flex justify-center p-4">
    //             <button
    //               onClick={loadMore}
    //               className="p-3 rounded text-white shadow-xl rounded-lg  bg-[#004AAD]"
    //             >
    //               Cargar más
    //             </button>
    //           </div>
    //         )}
    //       </div>
    //     </main>
    //   </div>

    //   <Footer/>
    // </div>

    <SecctionPg
      title="Productos para Perros"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={74}
          height={74}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-dog"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M11 5h2" />
          <path d="M19 12c-.667 5.333 -2.333 8 -5 8h-4c-2.667 0 -4.333 -2.667 -5 -8" />
          <path d="M11 16c0 .667 .333 1 1 1s1 -.333 1 -1h-2z" />
          <path d="M12 18v2" />
          <path d="M10 11v.01" />
          <path d="M14 11v.01" />
          <path d="M5 4l6 .97l-6.238 6.688a1.021 1.021 0 0 1 -1.41 .111a.953 .953 0 0 1 -.327 -.954l1.975 -6.815z" />
          <path d="M19 4l-6 .97l6.238 6.688c.358 .408 .989 .458 1.41 .111a.953 .953 0 0 0 .327 -.954l-1.975 -6.815z" />
        </svg>
      }
      apiEndpoint="products"
      baseUrl="https://salam-back.onrender.com"
      categoryId={1}
      backgroundImage="https://i.ytimg.com/vi/sFbt7Icd9RI/hq720.jpg"
      backgroundColor="#87ceeb"
    />
  );
}
