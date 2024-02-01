import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [filterCategory, setFilterCategory] = useState('');

  const addProduct = (productData) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...productData, id: prevProducts.length + 1 },
    ]);
  };

  const editProduct = (editedProduct) => {
    setEditingProduct(editedProduct);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) => [
      ...prevProducts.filter((p) => p.id !== updatedProduct.id),
      updatedProduct,
    ]);
    setEditingProduct(null);
  };

  const deleteProduct = (productToDelete) => {
    setProducts((prevProducts) =>
      prevProducts.filter((p) => p.id !== productToDelete.id)
    );
  };

  const filteredProducts = filterCategory
    ? products.filter((product) => product.category === filterCategory)
    : products;

  return (
    <div>
      <ProductForm onSubmit={editingProduct ? updateProduct : addProduct} />
      <ProductList
        products={filteredProducts}
        onEdit={editProduct}
        onDelete={deleteProduct}
        onFilter={(category) => setFilterCategory(category)}
      />
    </div>
  );
};

export default App;
