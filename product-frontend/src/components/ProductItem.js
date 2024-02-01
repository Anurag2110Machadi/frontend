import React from 'react';

const ProductItem = ({ product, onEdit, onDelete }) => {
  return (
    <div>
      <p>Description: {product.description}</p>
      <p>Expires: {product.expires ? 'Yes' : 'No'}</p>
      {product.expires && <p>Expiry Date: {product.expiryDate}</p>}
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Special: {product.isSpecial ? 'Yes' : 'No'}</p>
      <button onClick={() => onEdit(product)}>Edit</button>
      <button onClick={() => onDelete(product)}>Delete</button>
    </div>
  );
};

export default ProductItem;
