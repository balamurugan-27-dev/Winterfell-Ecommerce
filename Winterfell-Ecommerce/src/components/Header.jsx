import React from 'react'
import '../css/Header.css'
import { Link} from 'react-router'
export default function 
() {

 
  return (
    <div className='Header'>
        <div className='title'>
            <p>Winter<span>Fell</span></p>
        </div>
        <div className='navigation'>
            <a href="#home"><span>Home</span></a>
            <a href="#products"><span>Products</span></a>
            <Link to="/contact"><span>Contact</span></Link>
            <a href='#enquiery'><span>Enquiery</span></a>

        </div>
    </div>
  )
}
