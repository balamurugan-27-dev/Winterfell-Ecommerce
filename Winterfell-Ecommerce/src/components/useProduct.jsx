import axios from 'axios';
import React, { useEffect, useState } from 'react'
import api from './AxiosInstance';
export default function useProduct() {
    const [data,setData]=useState(null);
    const [id,setId]=useState(null);
    const token=localStorage.getItem("token")


    useEffect(()=>{
          if (!id) return;
            api.get(`/getproduct/${id}`).then(response=>setData(response.data))
            .catch(error=>console.log("Error from api"+error))

    },[id]);

  return [data,setId];
}

