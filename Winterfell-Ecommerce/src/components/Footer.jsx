import React from 'react'
import {Link} from 'react-router'
import '../css/Footer.css'
import useReveal from './useReveal'
export default function Footer() {

    const revealRef=useReveal();

  return (
    <div>
        <div className='footer-container reveal' ref={revealRef}>
            <div className='container'>
                <p className='footer-winterfell'>WINTERFELL</p>
                <p>Discover pieces that feel like you.</p>
            </div>
            <div className='container'>
                <p className='heading'> Shop</p>
                <Link>New Arrivals</Link>
                <Link>Women</Link>
                <Link>Men</Link>
            </div>

            <div className='container'>
                <p className='heading'>Help</p>
                <Link>Contact Us</Link>
                <Link>Shippingh & Returns</Link>
                <Link>FAQs</Link>
            </div>
            <div className='container'>
                <p className='heading'>Follow</p>
                <Link>Instagram</Link>
                <Link>Our Story</Link>
            </div>
        </div>

        <div className='credits'>
            <p>Created By : <span>Balamurugan M</span> </p>
            <p>Email : <span>  balamurugan.dev27@gmail.com </span></p>
        </div>
    </div>
  )
}
