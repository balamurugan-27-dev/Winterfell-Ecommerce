import React from 'react'
import Home from './Home'
import Header from './Header'
import Product from './Product'
import Contacts from './Contacts'
export default function App() {
  return (
    <div className='app'>
        <div className='Header'>
            <Header/>
        </div>
        <div className='Home-Section'>
            <Home/>
        </div>
        <div className='Products-Section'>
            <Product/>
        </div>
    </div>
  )
}
