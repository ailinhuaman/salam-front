import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function DetalleProducto() {
  const { prodId } = useParams();
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://127.0.0.1:8000/products/${prodId}`
      );
      console.log(response);
      // Agregar tallas y colores al estado del producto
      setProduct(response.data);
    } catch (err) {
      console.error("Error al obtener el producto:", err);
      setError("No se pudo cargar el producto.");
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="min-h-screen bg-slate-200">
      {/* Navigation Bar (reused from the main page) */}
      <Navbar />

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center "
        >
          <button className="bg-white text-black px-2 py-2 capitalize font-bold w-fit rounded-full  text-sm hover:border-gray-500 inline-flex items-center gap-2 ">
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
            </svg>Volver a productos
          </button>
          
        </Link>

        <div className="grid gap-8 md:grid-cols-2">
          {loading && "cargando..."}
          {/* Product Image */}
          <div className="aspect-square w-full rounded-xl bg-[#fff] border ">
            <img
              src={product["image_url"]}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="mb-4 text-3xl font-bold capitalize">
              {product["name"]}
            </h1>
            <p className="mb-4 text-xl font-semibold text-gray-700">
              S/ {product["price"]}
            </p>
            <p className="mb-6 text-gray-600">{product["description"]}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="mb-2 font-semibold">Marca:</h3>
              <div className="flex gap-2">
                <button className="bg-white text-black px-3 py-2 capitalize font-bold w-fit rounded-full  text-sm hover:border-gray-500 ">
                  {product["marca"]}
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-2 font-semibold">Categoria:</h3>
              <div className="flex gap-2">
                <button className="bg-white text-black px-3 py-2 capitalize font-bold w-fit rounded-full  text-sm hover:border-gray-500 ">
                  {product["categori"]}
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-2 font-semibold">Disponible:</h3>
              <div className="flex gap-2">
                <button className="bg-white text-black px-3 py-2 capitalize font-bold w-fit rounded-full  text-sm hover:border-gray-500 ">
                  {product["stock"] > 0? "Disponible": "No Disponible"}
                </button>
              </div>
            </div>

            {/* Add to Cart and Wishlist Buttons */}
            <div className="flex gap-4 ">
              <button className="flex justify-center gap-4 w-full rounded-full bg-black px-6 py-3 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
</svg>
                Comprar por Whatsapp
              </button>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ----------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import Layout from "../Componentes/Layout";
// import SugerenciasCategoria from "../Componentes/secciones/SugerenciasCategoria";

// function DetalleProducto() {
//   const { tiendaId } = useParams(); // Obtener el ID de la URL
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedSize, setSelectedSize] = useState();
//   const [selectedColor, setSelectedColor] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const navigate = useNavigate();
//   const fetchProduct = async () => {
//     try {
//       const response = await axios.get(
//         `http://127.0.0.1:8000/products/${tiendaId}`
//       );
//       // Convertir los strings de tallas y colores a arrays
//       const sizes = JSON.parse(response.data.sizes);
//       const colors = JSON.parse(response.data.colors);
//       setSelectedSize(sizes[0] || ""); // Si hay tallas
//       setSelectedColor(colors[0] || ""); // Si hay colores
//       // Agregar tallas y colores al estado del producto
//       setProduct({ ...response.data, sizes, colors });
//     } catch (err) {
//       console.error("Error al obtener el producto:", err);
//       setError("No se pudo cargar el producto.");
//       navigate("/tienda");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProduct();
//   }, [tiendaId]);

//   const handleBuy = () => {
//     if (!selectedSize || !selectedColor || quantity <= 0) {
//       alert("Por favor, selecciona talla, color y cantidad.");
//       return;
//     }

//     const mensaje = `Hola! Quisiera comprar el siguiente producto:
// - Nombre: ${product.name}
// - Talla: ${selectedSize}
// - Color: ${selectedColor}
// - Cantidad: ${quantity}
// - Precio: S/ ${product.price * quantity}`;

//     const whatsappUrl = `https://wa.me/51933238447?text=${encodeURIComponent(
//       mensaje
//     )}`;

//     window.open(whatsappUrl, "_blank"); // Abrir WhatsApp en una nueva pestaña
//   };

//   if (loading) return <p className="text-center">Cargando...</p>;
//   if (error) return <p className="text-red-500 text-center">{error}</p>;

//   return (
//     <Layout>
//       <div className="flex w-full min-h-auto h-full max-sm:flex-col max-sm:items-start">
//         <div className="max-sm:w-full bg-[#792D2B]/60 w-1/2 h-screen overflow-y-hidden flex justify-center items-center">
//           <img
//             className="w-full object-cover h-full object-top"
//             src={`http://127.0.0.1:8000${product.image_url.replace(".", "")}`}
//             alt={product.name}
//           />
//         </div>

//         <div className="max-sm:w-full bg-white w-1/2 h-screen flex justify-center items-center p-3">
//           <div className="max-w-xl  mx-auto p-4 flex flex-col gap-2 bg-white shadow-lg rounded-lg ">
//             <h2 className="font-bold capitalize text-3xl text-[#792D2B]">
//               {product.name}
//             </h2>
//             <p className="text-gray-700 text-lg italic">{product.description}</p>

//             <div className="">
//               <span className="text-xl font-bold text-gray-900">Precio:</span>
//               <span className="text-xl text-green-600 ml-2">
//                 ${product.price}
//               </span>
//             </div>

//             <div className="">
//               <span className="text-xl font-bold text-gray-900">Stock:</span>
//               <span className="text-xl text-green-600 ml-2">
//                 {product.stock > 0 ? "Disponible" : "Agotado"}
//               </span>
//             </div>

//             <div className="">
//               <span className="text-xl font-bold text-gray-900">
//                 Categoría:
//               </span>
//               <span className="text-xl text-gray-600 ml-2">
//                 {product.category}
//               </span>
//             </div>

//             {/* Selector de Talla */}
//             <div className="">
//               <label className="block mb-2 text-gray-700">Talla:</label>
//               <select
//                 value={selectedSize}
//                 onChange={(e) => setSelectedSize(e.target.value)}
//                 className="p-2 border rounded w-full"
//                 required
//               >
//                 <option value="">Selecciona una talla</option>
//                 {product.sizes.map((size) => (
//                   <option key={size} value={size}>
//                     {size}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Selector de Color */}
//             <div className="">
//               <label className="block mb-2 text-gray-700">Color:</label>
//               <select
//                 value={selectedColor}
//                 onChange={(e) => setSelectedColor(e.target.value)}
//                 className="p-2 border rounded w-full"
//                 required
//               >
//                 <option value="">Selecciona un color</option>
//                 {product.colors.map((color) => (
//                   <option key={color} value={color}>
//                     {color}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Campo de Cantidad */}
//             <div className="">
//               <label className="block mb-2 text-gray-700">Cantidad:</label>
//               <input
//                 type="number"
//                 min="1"
//                 value={quantity}
//                 onChange={(e) => setQuantity(e.target.value)}
//                 className="p-2 border rounded w-full"
//                 required
//               />
//             </div>

//             <button
//               onClick={handleBuy}
//               className="mt-4 p-3 rounded bg-[#792D2B] text-white border-[#792D2B] border-2"
//             >
//               Comprar
//             </button>
//           </div>
//         </div>
//       </div>
//       <h2 className="text-3xl font-bold text-gray-900 max-sm:pb-12 sm:p-6 text-center capitalize">
//         Algunos productos relacionados a este
//       </h2>
//       <SugerenciasCategoria
//         categoria={product.category}
//         w="250px"
//         h="300px"
//         limit={3}
//       />
//       <br />
//     </Layout>
//   );
// }

// export default DetalleProducto;
