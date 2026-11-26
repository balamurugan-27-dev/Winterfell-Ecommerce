import React from 'react'
import Header from './Header'
import Home from './Home'
import Product from './Product'
import Contacts from './Contacts'
import Footer from './Footer'
import { useLocation } from 'react-router';
import { useEffect } from 'react'
export default function App() {

   const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            setTimeout(() => {
                document.querySelector(location.hash)?.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 100);
        }
    }, [location]);

  return (
    <div className='app'>
        <div>
            <Header/>
        </div>
        <div>
            <Home/>
        </div>
        <div id='products'>
          <Product/>
        </div>
        <div id='footer' >
          <Footer/>
        </div>
    </div>
  )
}
