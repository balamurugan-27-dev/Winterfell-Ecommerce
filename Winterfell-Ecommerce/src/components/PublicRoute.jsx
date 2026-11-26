import React from 'react'
import { Navigate, Outlet } from "react-router";
export default function PublicRoute() {

const token=localStorage.getItem("token");
if(token){
    return  <Navigate to={'/'} replace />
}
    return <Outlet/>
}
