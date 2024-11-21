import Image from 'next/image'
import React from 'react'

export default function Nav() {
  return (
    <div>
      <header className="header">
    <div className="container">
      <a href="#" className="logo">
   
      <Image src="/logo.jpg" alt='hero' className='logo' width={1000} height={1000}/>
        <span className="logo-text">Hamza</span>
      </a>
      <nav className="nav-links">
        <a href="/" className="nav-link">Home</a>
        <a href="/About" className="nav-link">About</a>
        <a href="/Contact" className="nav-link">Contact</a>
        <a href="#" className="nav-link">Privacy Policy</a>
      </nav>
      <button className="button">
        Sign Up
      </button>
    </div>
  </header>
    </div>
  )
}
