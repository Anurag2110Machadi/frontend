import React from 'react';

const ProductList = ({ products, onEdit, onDelete, onFilter }) => {
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Product List</h2>
      <label>
        Filter by Category:
        <select onChange={(e) => onFilter(e.target.value)}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              background: product.isSpecial ? '#ffffcc' : 'inherit',
              padding: '10px',
              margin: '5px',
            }}
          >
            <strong>{product.description}</strong> - {product.category} - ${product.price}
            <button onClick={() => onEdit(product)}>Edit</button>
            <button onClick={() => onDelete(product)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
