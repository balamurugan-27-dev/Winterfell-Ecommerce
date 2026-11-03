import { StrictMode } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from'react-router'
import './css/index.css'
import App from './components/App.jsx'

import ErrorPage from './components/ErrorPage.jsx'
import Contacts from './components/Contacts.jsx'

const router=createBrowserRouter([{
  path : '/',
  element :<App/>,
  errorElement: <ErrorPage />
},
{
  path:'/contact',
  element:<Contacts/>,
}
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
