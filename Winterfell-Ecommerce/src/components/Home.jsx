import React from 'react'
import '../css/Home.css'
import WinterFell from '../assets/WinterFell.png'

export default function Home() {
  return (
    <div className='home' id="home">
        <div className='text'>
            <h1>Discover Your Style. Shop Your World.</h1>
            <h2>Everything You Love, All in One Place.</h2>
            <p>
              Explore the latest trends, discover amazing products,
              and enjoy a shopping experience designed around you.
              Find your favorites at WinterFell Store.
            </p>
        </div>

        <div className="image">
            <img src={WinterFell} alt="WinterFell Store" />
        </div>
    </div>
  )
}