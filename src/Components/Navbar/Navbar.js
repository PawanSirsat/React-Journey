// Navbar.js

import React from 'react'

const navbarStyle = {
  backgroundColor: '#333',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
}

const logoStyle = {
  fontSize: '1.5rem',
}

const navLinkStyle = {
  display: 'flex',
  listStyle: 'none',
  marginLeft: '1rem',
  gap: '50px',
}

function Navbar() {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a class='navbar-brand' href='#'>
        <img
          width='30'
          height='30'
          src='https://img.icons8.com/color/48/react-native.png'
          alt='react-native'
        />{' '}
        React Journey
      </a>
      <button
        class='navbar-toggler'
        data-bs-toggle='collapse'
        data-bs-target='#navbar'
      >
        <span class='navbar-toggler-icon'></span>
      </button>
      <div class='collapse navbar-collapse' id='navbar'>
        <div class='navbar-nav'>
          <a class='nav-item nav-link active' href='/'>
            Home
          </a>
          <a class='nav-item nav-link' href='/concept'>
            Chapter 1
          </a>
          <a class='nav-item nav-link' href='#'>
            Chapter 2
          </a>
          <a class='nav-item nav-link' href='#'>
            Chapter 3
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
