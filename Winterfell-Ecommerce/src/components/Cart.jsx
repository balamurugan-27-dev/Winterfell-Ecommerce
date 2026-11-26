import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './Product';
import Header from './Header';
import "../css/Cart.css"
import api from './AxiosInstance';

export default function Cart() {

    const [products,setProducts]=useState([]);
    const token=localStorage.getItem("token")
    const [refersh,setRefresh]=useState(true)

    useEffect(()=>{
        api.get(`/cart/getcartitems`)
     .then(response=>setProducts(response.data)).catch(error=>console.log(error));
    },[refersh]);

    function handleQuantity(id,quantity){
        api.put(`/cart/updatequantity?id=${id}&quantity=${quantity}`)
        .then(()=>setRefresh(pre=>!pre))
        .catch(error=>console.log(error));
    }

    function removeItem(id){
        api.delete(`/cart/deletecartitem?id=${id}`)
       .then(()=>setRefresh(pre=>!pre))
        .catch(error=>console.log(error));
    }

    const subTotalAmount = products.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0   
    );
    const tax=(Number(subTotalAmount)*30)/100;
    const totalAmount=subTotalAmount+tax;
  return (
    <div>
        <Header/>
        <div className='cart'>
            {products.length>0? 
            <div className='cart-container'>

             <div  className='item-container'>
                {products.map(item=>( 
                    <div className='cart-item' key={item.id} >
                        <div>
                        <img src={item.product.imageUrl} alt="" />
                        </div>
                        <div>
                            <h4>{item.product.name}</h4>
                            <h2>{item.product.price}</h2>
                        </div>
                        <div className='quantity'>
                            <div className="value">
                                <button onClick={()=>{handleQuantity(item.id,item.quantity+1)}} disabled={item.quantity==10} > <i className="bi bi-plus"></i> </button>
                                <p>{item.quantity}</p>                                
                                <button onClick={()=>{handleQuantity(item.id,(Math.max(1,item.quantity-1)))}} disabled={item.quantity==1} ><i className="bi bi-dash-lg"></i></button>      
                            </div>
                            <div className='remove'>
                                <button onClick={()=>removeItem(item.id)}>Remove</button>
                            </div>                     
                            
                        </div>
                    </div>
                ))}

            </div>

            <div className='bill-container'>
                <div className='bill-box'>
                    <h2>Order Summary</h2>
                    <div className='subtotal'>
                        <p>Subtotal</p>
                        <p className='end'>{subTotalAmount.toFixed(2)}</p>
                    </div>
                    <div className='shipping'>
                        <p>Shipping</p>
                        <p className='free end'>Free</p>
                    </div>
                    <div className='tax'>
                        <p>Tax</p>
                        <p className='end'>{tax}</p>
                    </div>
                    <hr />
                    <div className='total'>
                        <p>Total</p>
                        <p className=' end'>{totalAmount.toFixed(0)} Rs</p>
                    </div>
                    <div className='checkout'>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
            </div>
            :
            <div>
                no cart items
            </div>
           
            }
           
           
        </div>
    </div>
  )
}
