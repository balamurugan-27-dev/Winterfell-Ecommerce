import { StrictMode } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from'react-router'
import './css/index.css'
import App from './components/App.jsx'

import ErrorPage from './components/ErrorPage.jsx'
import Contacts from './components/Contacts.jsx'
import ProductView from './components/ProductView.jsx'
import Login from './components/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Cart from './components/Cart.jsx'
import AddProduct from './components/AddProduct.jsx'
import Register from './components/Register.jsx'
import PublicRoute from './components/PublicRoute.jsx'
import AdminPanel from './components/AdminPanel.jsx'
import RemoveProduct from './components/RemoveProduct.jsx'
const router=createBrowserRouter([{
  path : '/register',
  element :<Register/>,
  errorElement: <ErrorPage />
},
{
  element : <PublicRoute/>,
  children :[
    {
      path: '/login',
      element: <Login />
    }
  ]
}, 
{
  element: <ProtectedRoute/>,
  children:[
        {
        path: "/",
        element: <App/>
        },
        {
          path:"/viewproduct/:id",
          element:<ProductView/>
        },
        {
          path : "/cart",
          element :<Cart/>
        },
        {
          path : "/contact",
          element : <Contacts/>
        },
        {
          path : "/addproduct",
          element : <AddProduct/>
        },
        {
          path : "/admin",
          element: <AdminPanel/>
        },
        {
          path : "/removeProduct",
          element : <RemoveProduct/>
        }
    ]
}
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
