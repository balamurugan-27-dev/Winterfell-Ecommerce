import React from 'react'
import { Link } from 'react-router'
import '../css/Home.css'
import wolf from '../assets/wolf.jpg'
import useReveal from './useReveal'
export default function Home() {

  const revealRef=useReveal();

  return (
    <>
    <div className='home-container reveal' ref={revealRef}>
        <div className='text-columm'>
            <div className='texts '>
            <p className='edition'>THE WINTER EDIT · 2026</p>
            <p className='main-text'>Discover Your Style.Shop Your World.</p>
            <p className='last-text'>Timeless essentials, modern silhouettes and everyday pieces made to move with you.</p>
            </div>
            <div className='button'>
               <Link className='link'>Explore Collection</Link>
            </div>
           
            
        </div>
        <div className='image-column ' >
          <img className="home-image" src={wolf} alt="fa" />
          <div className='brand-shape'>
              <h2>WinterFell</h2>
          </div>
        </div>
    </div>
    <div className='home-footer'>
        <div className='container'>
            <i className="bi bi-stars"></i>
            <p>Free Shipping All Over India</p>
        </div>
        <div className='container'>
          <i className="bi bi-arrow-clockwise"></i>
          <p>7 Days Return </p>
        </div>
        <div className='container'>
           <i className="bi bi-diamond"></i>
           <p>Secure Checkout</p>
        </div>
        <div className='container'>
            <i className="bi bi-balloon-heart"></i>
            <p>Curated With Care</p>
        </div>
    </div>
    </>
  )
}
