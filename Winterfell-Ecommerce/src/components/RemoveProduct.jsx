
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/RemoveProduct.css'
import api from './AxiosInstance'

export default function RemoveProduct() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [deletingId, setDeletingId] = useState(null)

  const fetchProducts = async () => {
    try {
      setLoading(true)

      const response = await  api.get(`/getproducts?page=0`)

      setProducts(response.data.content || [])

    } catch (err) {
      console.error(err)
      setError('Failed to load products')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this product?'
    )

    if (!confirmDelete) return

    try {
      setDeletingId(id)

      await api.delete(
        `/deleteproduct?id=${id}`)

      setProducts(prev =>
        prev.filter(product => product.id !== id)
      )

    } catch (err) {
      console.error(err)
      alert('Unable to delete product')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="remove-product">

      <div className="remove-product-header">
        <div>
          <h2>Remove Products</h2>
          <p>Manage products available in your store</p>
        </div>

        <div className="product-count">
          <i className="bi bi-box-seam"></i>
          {products.length} Products
        </div>
      </div>

      {loading ? (

        <div className="remove-loading">
          <div className="spinner-border"></div>
          <p>Loading products...</p>
        </div>

      ) : error ? (

        <div className="remove-error">
          {error}
          <button onClick={fetchProducts}>Retry</button>
        </div>

      ) : products.length === 0 ? (

        <div className="no-products">
          <i className="bi bi-box-seam"></i>
          <h3>No Products Found</h3>
          <p>Your store currently has no products.</p>
        </div>

      ) : (

        <div className="remove-table-wrapper">

          <table className="remove-table">

            <thead>
              <tr>
                <th>Product</th>
                <th>Product ID</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {products.map(product => (

                <tr key={product.id}>

                  <td>
                    <div className="remove-product-details">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                      />

                      <span>{product.name}</span>
                    </div>
                  </td>

                  <td>#{product.id}</td>

                  <td>₹{product.price}</td>

                  <td>
                    <button
                      className="remove-btn"
                      disabled={deletingId === product.id}
                      onClick={() => handleDelete(product.id)}
                    >
                      <i className="bi bi-trash"></i>

                      {deletingId === product.id
                        ? 'Removing...'
                        : 'Remove'}
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}

    </div>
  )
}
