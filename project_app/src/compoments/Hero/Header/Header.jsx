import React from 'react'
import "./Header.css";
// import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>

        <img src = 'src\assets\logo.png' alt="image" className='Logo'/>
        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header