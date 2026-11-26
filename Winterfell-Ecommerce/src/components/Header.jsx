import React, { useEffect, useRef, useState } from 'react'
import '../css/Header.css'
import { Link} from 'react-router'
export default function () {

  const [show,setShow]=useState(false);
  const menuRef=useRef(null);
  useEffect(() => {

    function handleClick(event) {
     if(menuRef.current&& !menuRef.current.contains(event.target)){
        setShow(false);
     }
    }

    document.addEventListener('mousedown', handleClick);

    return () => {
        document.removeEventListener('mousedown', handleClick);
    };

}, []);


  return (
    <div className='header' ref={menuRef}>
        
        <div className='title'>
            <p className='winterfell'>
                WinterFell
            </p>
            <p className='down'>
            STYLE THAT SAYS
            </p>
        </div>

        <div className='navigation'>
            <Link to={"/"}>Home</Link>
             <a href='/#products' onClick={() => setShow(false)}>Shop</a>
            <a href="/#footer">Contact</a>
            <Link to={"/contact"}>Enquiery</Link>
        </div>

            {show && (
        <div className='mobile-navigation'>
            <Link to="/" onClick={() => setShow(false)}>Home</Link>

            <a href='/#products' onClick={() => setShow(false)}>Shop</a>

            <a href='/#footer' onClick={() => setShow(false)}>Contact</a>

            <Link to={'/contact'} onClick={() => setShow(false)}>Enquiry</Link>

            <Link onClick={() => setShow(false)}>Search</Link>

            <Link to="/cart" onClick={() => setShow(false)}>Cart</Link>
        </div>
        )}

        <div className='search-bag'>
            <Link className='search'><i className="bi bi-search "></i>
            <p>search</p>
            </Link>
            <Link className='bag' to={"/cart"}><i className="bi bi-bag-fill"></i>
            <p>cart</p></Link>
        </div>

        <div className='hamburger'>
              <button onClick={(e)=>setShow(!show)}  ><i className={show ? "bi bi-x-lg" : "bi bi-list"}></i></button>
        </div>
    </div>
  )
}
