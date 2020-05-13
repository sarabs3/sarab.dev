import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Sarab</strong>, a passionate
        <br />
        software developer 💻
        <br />
         Tech Speaker 🎤 , Marathoner 🏃‍♂️
        <br />
        hobbiest photographer
        📸
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
