  import  { useEffect } from 'react'
  import axios from 'axios'
  import { useState } from 'react';
   import api from '../components/AxiosInstance';

  export default function getAllProducts() {

    const[page,setPage]=useState(0);
    const[data,setData]=useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const token=localStorage.getItem('token')
    useEffect(()=>{
      
       api.get(`/getproducts?page=${page}`).then((response)=>{setData(response.data.content);setTotalPages(response.data.totalPages)})
       .catch(error=>console.log("API Error :"+error));
        
    },[page])

  return (
      [data,page,setPage,totalPages]
    )
  }


