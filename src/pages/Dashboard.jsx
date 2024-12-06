import { useState, useEffect } from "react";
import {
  fetchProducts,
  fetchCategories,
  fetchBrands,
  createProduct,
  createBrand,
  deleteProduct,
  editProduct,
} from "../api/api";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit] = useState(10);

  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    atributes: "",
    stock: "",
    categori_id: "",
    marca_id: "",
    file: null,
  });
  const [productEditForm, setEditProductForm] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    atributes: "",
    stock: "",
    categori_id: "",
    marca_id: "",
    file: null,
  });

  const [newBrand, setNewBrand] = useState("");

  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, [skip, limit]);

  const fetchData = async () => {
    try {
      const [productsRes, categoriesRes, brandsRes] = await Promise.all([
        fetchProducts(skip, limit),
        fetchCategories(),
        fetchBrands(),
      ]);

      setProducts(productsRes.data);
      setCategories(categoriesRes.data);
      setBrands(brandsRes.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleProductFormChange = (e) => {
    const { name, value } = e.target;
    setProductForm({ ...productForm, [name]: value });
  };

  const handleEditProductFormChange = (e) => {
    const { name, value } = e.target;
    setEditProductForm({ ...productEditForm, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setProductForm({ ...productForm, file: e.target.files[0] });
    }
  };
  const handleFileChangeEdit = (e) => {
    if (e.target.files) {
      setEditProductForm({ ...productEditForm, file: e.target.files[0] });
    }
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(productForm).forEach(([key, value]) => {
      formData.append(key, value);
      console.log(key, value);
    });

    try {
      setLoading(true);
      await createProduct(formData);

      setIsProductModalOpen(false);
      alert("Producto creado exitosamente!");
      await fetchData();
      setProductForm({
        name: "",
        description: "",
        price: "",
        atributes: "",
        stock: "",
        categori_id: "",
        marca_id: "",
        file: null,
      });
    } catch (error) {
      console.error("Error creating product", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateBrand = async (e) => {
    e.preventDefault();
    try {
      await createBrand(newBrand);
      alert("Marca creada exitosamente!");
      fetchData();
      setNewBrand("");
      setIsBrandModalOpen(false);
    } catch (error) {
      console.error("Error creating brand", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      fetchData();
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const handleEditProduct = (product) => {
    let textcat =  product.categori
    let textmar =product.marca

    const categoria = categories.find((cat) => cat.name === textcat)
    const marca = brands.find((bra) => bra.name === textmar)
 
    setIsEditModalOpen(true);
    setEditProductForm({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      atributes: product.atributes,
      stock: product.stock,
      categori_id: categoria.id,
      marca_id: marca.id,
      file: null,
    });

  };

  const sentEditporduct = async (e) => {
    e.preventDefault();
    const numericKeys = ["categori_id", "marca_id"];
    const formData = new FormData();
    Object.entries(productEditForm).forEach(([key, value]) => {
      if (key !== "id" && !(key === "file" && value === null)) {
        const formattedValue = numericKeys.includes(key)
          ? Number(value)
          : value; // Convertir a número si la clave está en numericKeys
        formData.append(key, formattedValue);
        console.log(key, formattedValue); // Verificar qué valor se está agregando
      }
    });
    try {
      await editProduct(productEditForm.id, formData);
      fetchData();
       setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-[#004AAD]">
      <div className="flex justify-between items-center flex-wrap gap-5 bg-white p-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Panel de Administracion La Casa De Salam
        </h1>
        <div className="flex gap-2">
        <button
          className="p-2 bg-red-500 text-white rounded-lg shadow"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
        <button
          className="p-2 bg-blue-500 text-white rounded-lg shadow"
          onClick={()=>navigate("/")}
        >
          Ir a Tienda
        </button>
        </div>
      </div>
      <div className="p-6 bg-[#004AAD] min-h-screen max-w-[1400px] m-auto ">
        {/* Product list */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Productos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <button
              onClick={() => setIsProductModalOpen(true)}
              className="p-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Crear Producto
            </button>
            <button
              onClick={() => setIsBrandModalOpen(true)}
              className="p-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300"
            >
              Crear Marca
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Nombre</th>
                  <th className="py-3 px-6 text-left">Precio</th>
                  <th className="py-3 px-6 text-left">Stock</th>
                  <th className="py-3 px-6 text-left">Categoría</th>
                  <th className="py-3 px-6 text-left">Marca</th>
                  <th className="py-3 px-6 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {product.name}
                    </td>
                    <td className="py-3 px-6 text-left">S/ {product.price}</td>
                    <td className="py-3 px-6 text-left">{product.stock}</td>
                    <td className="py-3 px-6 text-left">{product.categori}</td>
                    <td className="py-3 px-6 text-left">{product.marca}</td>
                    <td className="py-3 px-6 text-left flex gap-2">
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="p-1 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className=" p-1 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition duration-300"
            onClick={() => setSkip(Math.max(0, skip - limit))}
            disabled={skip === 0}
          >
            Anterior
          </button>
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition duration-300"
            onClick={() => setSkip(skip + limit)}
            disabled={products.length < limit}
          >
            Siguiente
          </button>
        </div>

        {/* Modals */}
        <Modal
          isOpen={isProductModalOpen}
          onClose={() => setIsProductModalOpen(false)}
          title="Crear Producto"
        >
          <form onSubmit={handleCreateProduct} className="space-y-4">
            <input
              type="text"
              name="name"
              value={productForm.name}
              onChange={handleProductFormChange}
              placeholder="Nombre del producto"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            />
            <input
              type="number"
              name="price"
              value={productForm.price}
              onChange={handleProductFormChange}
              placeholder="Precio"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            />
            <textarea
              name="description"
              value={productForm.description}
              onChange={handleProductFormChange}
              placeholder="Descripción"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            />
            <input
              type="text"
              name="atributes"
              value={productForm.atributes}
              onChange={handleProductFormChange}
              placeholder="Atributos (e.g., talla, color)"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            />
            <input
              type="number"
              name="stock"
              value={productForm.stock}
              onChange={handleProductFormChange}
              placeholder="Stock"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            />
            <select
              name="categori_id"
              value={productForm.categoryId}
              onChange={handleProductFormChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            >
              <option value="" disabled={loading}>
                Seleccionar Categoría
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <select
              name="marca_id"
              value={productForm.brandId}
              onChange={handleProductFormChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            >
              <option value="">Seleccionar Marca</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            />
            <button
              disabled={loading}
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Crear Producto
            </button>
          </form>
        </Modal>

        <Modal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          title="Editar Producto"
        >
          <form className="space-y-4" onSubmit={sentEditporduct}>
            <input
              type="text"
              name="name"
              value={productEditForm.name}
              onChange={handleEditProductFormChange}
              placeholder="Nombre del producto"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            />
            <input
              type="number"
              name="price"
              value={productEditForm.price}
              onChange={handleEditProductFormChange}
              placeholder="Precio"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            />
            <textarea
              name="description"
              value={productEditForm.description}
              onChange={handleEditProductFormChange}
              placeholder="Descripción"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            />
            <input
              type="text"
              name="atributes"
              value={productEditForm.atributes}
              onChange={handleEditProductFormChange}
              placeholder="Atributos (e.g., talla, color)"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            />

            <input
              type="number"
              name="stock"
              value={productEditForm.stock}
              onChange={handleEditProductFormChange}
              placeholder="Stock"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            />
      
            <select
              name="categori_id"
              value={productEditForm.categori_id}
              onChange={handleEditProductFormChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            >
              <option disabled={loading}>Seleccionar Categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <select
              name="marca_id"
              value={productEditForm.marca_id}
              onChange={handleEditProductFormChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={loading}
            >
              <option>Seleccionar Marca</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>

            <input
              type="file"
              onChange={handleFileChangeEdit}
              className="w-full p-2 border border-gray-300 rounded-md"
              disabled={loading}
            />
            <button
              disabled={loading}
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Editar Producto
            </button>
          </form>
        </Modal>

        <Modal
          isOpen={isBrandModalOpen}
          onClose={() => setIsBrandModalOpen(false)}
          title="Crear Marca"
        >
          <form onSubmit={handleCreateBrand} className="space-y-4">
            <input
              type="text"
              value={newBrand}
              onChange={(e) => setNewBrand(e.target.value)}
              placeholder="Nueva marca"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition duration-300"
            >
              Crear Marca
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;
