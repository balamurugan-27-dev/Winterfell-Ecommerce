import React from 'react'
import { useState,useEffect } from 'react'
import  useAllProducts  from './useAllProducts';
import '../css/Product.css'
export default function Product() {

    const[data,page,setPage,totalPages]=useAllProducts();



  return (
    <>
    <div className='headings'>
        <h3>Products</h3>
    </div>
    <div className='products' id='products'>
        
     {data.length > 0 ? (
    data.map(product => (
        <div className='product' key={product.id}>
            <h3 key={product.id}>{product.name}</h3>
            <img className='image' src={product.imageUrl} alt="product" />
            <p>{product.price}</p>
        </div>
    ))
        ) : (
    <p>No data available</p>
        )}
    </div>

    <div className='icon'>
    
        <button onClick={()=>setPage(Math.max(page-1,0))}><i className="bi bi-arrow-left-circle left"></i></button>
         <button onClick={()=>setPage(Math.min(page+1,totalPages))}><i className="bi bi-arrow-right-circle right"></i></button>
     </div>

     </>
  )
}
