  import  { useEffect } from 'react'
  import axios from 'axios'
  import { useState } from 'react';
  export default function getAllProducts() {

    const[page,setPage]=useState(0);
    const[data,setData]=useState([]);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(()=>{
      {
        const API=`http://localhost:8080/api/getProducts?page=${page}`;

        axios.get(API).then((response)=>{setData(response.data.content);setTotalPages(response.data.totalPages);}).catch((error)=>console.log(error))
      }
    },[page])

  return (
      [data,page,setPage,totalPages]
    )
  }


