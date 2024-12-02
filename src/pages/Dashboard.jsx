import React, { useState, useEffect } from "react";
import {
  fetchProducts,
  fetchCategories,
  fetchBrands,
  createProduct,
  createCategory,
  createBrand,
  deleteProduct,
} from "../api/api";
import Modal from "../components/Modal";

const Dashboard = () => {
  const [loading, setLoading] = useState(false)
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

  const [newCategory, setNewCategory] = useState("");
  const [newBrand, setNewBrand] = useState("");

  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
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

  const handleFileChange = (e) => {
    if (e.target.files) {
      setProductForm({ ...productForm, file: e.target.files[0] });
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
      await createProduct(formData);
      setLoading(true)  
      alert("Producto creado exitosamente!");
      fetchData();
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
      setIsProductModalOpen(false);
    } catch (error) {
      console.error("Error creating product", error);
    }
  };

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    try {
      await createCategory(newCategory);
      alert("Categoría creada exitosamente!");
      fetchData();
      setNewCategory("");
      setIsCategoryModalOpen(false);
    } catch (error) {
      console.error("Error creating category", error);
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

  const handleDeleteProduct = async (id)=>{
    try {
        await deleteProduct(id)
        fetchData();
    } catch (error) {
        console.error("Error deleting product", error);
    }
  }

  return (
    <div className="bg-gray-100">
      <div className="p-6 bg-gray-100 min-h-screen max-w-[1400px] m-auto ">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Panel de Administracion La Casa De Salam
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <button
            onClick={() => setIsProductModalOpen(true)}
            className="p-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
          >
            Crear Producto
          </button>
          {/* <button
          onClick={() => setIsCategoryModalOpen(true)}
          className="p-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300"
        >
          Crear Categoría
        </button> */}
          <button
            onClick={() => setIsBrandModalOpen(true)}
            className="p-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300"
          >
            Crear Marca
          </button>
        </div>
        {/* Product list */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Productos
          </h2>
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
                      onClick={() => alert("eliminar")}
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
            {loading &&"cargando..." }
          <form onSubmit={handleCreateProduct} className="space-y-4">
            <input
              type="text"
              name="name"
              value={productForm.name}
              onChange={handleProductFormChange}
              placeholder="Nombre del producto"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="number"
              name="price"
              value={productForm.price}
              onChange={handleProductFormChange}
              placeholder="Precio"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <textarea
              name="description"
              value={productForm.description}
              onChange={handleProductFormChange}
              placeholder="Descripción"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              name="atributes"
              value={productForm.atributes}
              onChange={handleProductFormChange}
              placeholder="Atributos (e.g., talla, color)"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="number"
              name="stock"
              value={productForm.stock}
              onChange={handleProductFormChange}
              placeholder="Stock"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <select
              name="categori_id"
              value={productForm.categoryId}
              onChange={handleProductFormChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Seleccionar Categoría</option>
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
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Crear Producto
            </button>
          </form>
        </Modal>

        {/* <Modal isOpen={isCategoryModalOpen} onClose={() => setIsCategoryModalOpen(false)} title="Crear Categoría">
        <form onSubmit={handleCreateCategory} className="space-y-4">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Nueva categoría"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300"
          >
            Crear Categoría
          </button>
        </form>
      </Modal> */}

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
