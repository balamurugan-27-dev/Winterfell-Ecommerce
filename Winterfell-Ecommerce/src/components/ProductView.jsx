import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useProduct from './useProduct'
import '../css/ProductView.css'
import axios from 'axios'
import api from './AxiosInstance'

export default function ProductView() {

  const{id}=useParams()
  const[data,setId]=useProduct();
  const[quantity,setQuantity]=useState(1);
  const token=localStorage.getItem("token")
  useEffect(()=>{
    setId(id);
  },[id,setId])


  function addBag(pid){
    api.post(`cart/addcart/${pid}/${quantity}`,{});
    alert("add success");
  }

  return (
    <div>

      {data!=null?(<div className='view-product'>

        <div className='view-image'>
          <img src={data.imageUrl} alt="" />
        </div>

        <div className='view-details'>
          <h2>WinterFell Products</h2>
          <h2 className='name'>{data.name}</h2>
          <p className='discription'>{data.description}</p>
          <p className='price'>{data.price} Rs</p>
          <input className="quantity" type="number" placeholder='enter qunatity' value={quantity} onChange={(e)=>setQuantity(Math.max(1,Number(e.target.value)))} />

          <button className='bag-button' onClick={()=>addBag(data.id)} > Add to Bag</button>

          <p className=' delivery-details'>@ free delivery all over India</p>

        </div>

      </div>):
      (
        <div>
          loadingg
          </div>
      )
      }
    </div>
  )
}
