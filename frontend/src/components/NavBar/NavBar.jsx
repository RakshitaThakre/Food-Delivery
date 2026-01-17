import {useState} from 'react';
import React from 'react'
import './NavBar.css';
import { assets } from '../../assets/assets';

const NavBar = () => {

  const [menu,setMenu] = useState("");

  return (
    <div className='NavBar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home" ? "active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu" ? "active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app" ? "active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact us")} className={menu==="contact us" ? "active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" className="search_icon"/>
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" className="basket_icon"/>
            <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default NavBar
