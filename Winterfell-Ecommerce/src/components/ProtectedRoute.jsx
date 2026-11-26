import React from 'react'
import { Outlet,Navigate} from 'react-router';
import Login from './Login';

export default function ProtectedRoute() {
    const token = localStorage.getItem("token");

  return token? <Outlet/> : <Navigate to="/login" replace/>
}
