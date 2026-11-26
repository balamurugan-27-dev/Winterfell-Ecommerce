
import React, { useState } from 'react';
import '../css/AddProduct.css';
import axios from 'axios';
import api from './AxiosInstance';

export default function AddProduct() {

  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append(
      'product',
      new Blob([JSON.stringify(product)], {
        type: 'application/json'
      })
    );

    formData.append('image', image);

    try {
      const response =  await api.post(
        '/saveproduct',
        formData
      );

      alert('Product added successfully!');
      console.log(response.data);

      setProduct({
        name: '',
        price: '',
        description: ''
      });

      setImage(null);
      setPreview(null);

    } catch (error) {
      console.error(error);
      alert('Failed to add product');
    }
  };

  return (
    <div className="add-product-page">

      <div className="add-product-header">
        <h2>Add New Product</h2>
        <p>Add a new product to your WinterFell Store</p>
      </div>

      <form onSubmit={handleSubmit} className="product-form">

        <div className="product-form-grid">

          {/* Product Image */}

          <div className="product-image-section">
            <h3>Product Image</h3>

            <label className="image-upload-box">

              {preview ? (
                <img src={preview} alt="Product preview" />
              ) : (
                <div className="upload-placeholder">
                  <i className="bi bi-cloud-arrow-up"></i>
                  <p>Click to upload image</p>
                  <span>PNG, JPG or WEBP</span>
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                hidden
              />

            </label>

            {preview && (
              <button
                type="button"
                className="remove-image"
                onClick={() => {
                  URL.revokeObjectURL(preview);
                  setImage(null);
                  setPreview(null);
                }}
              >
                Remove Image
              </button>
            )}
          </div>

          {/* Product Details */}

          <div className="product-details-section">

            <h3>Product Details</h3>

            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter product name"
                value={product.name}
                onChange={handleChange}
                required
              />
            </div>

    

              <div className="form-group">
                <label>Price (₹)</label>
                <input
                  type="number"
                  name="price"
                  placeholder="0.00"
                  min="0.01"
                  step="0.01"
                  value={product.price}
                  onChange={handleChange}
                  required
                />
              </div>


        
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Describe your product..."
                rows="6"
                value={product.description}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="add-product-btn"
              disabled={!image}
            >
              <i className="bi bi-plus-circle"></i>
              Add Product
            </button>

          </div>

        </div>

      </form>
    </div>
  );
}
