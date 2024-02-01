import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, editingProduct }) => {
  const [productData, setProductData] = useState({
    description: '',
    canExpire: false,
    expiryDate: '',
    category: '',
    price: '',
    isSpecial: false,
  });

  useEffect(() => {
    if (editingProduct) {
      setProductData(editingProduct);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(productData);
    setProductData({
      description: '',
      canExpire: false,
      expiryDate: '',
      category: '',
      price: '',
      isSpecial: false,
    });
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Can Expire:
          <input
            type="checkbox"
            name="canExpire"
            checked={productData.canExpire}
            onChange={handleChange}
          />
        </label>
        <br />
        {productData.canExpire && (
          <label>
            Expiry Date:
            <input
              type="date"
              name="expiryDate"
              value={productData.expiryDate}
              onChange={handleChange}
            />
          </label>
        )}
        <br />
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Special:
          <input
            type="checkbox"
            name="isSpecial"
            checked={productData.isSpecial}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">{editingProduct ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default ProductForm;
