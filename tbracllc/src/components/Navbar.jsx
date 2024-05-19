import React from 'react'
import { NavLink } from 'react-router-dom'

//Styling has tailwindcss stuff needs to be altered to base css
const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/">
        <p className='bg-blue-200 hover:bg-gradient-to-b from-blue-200 to-cyan-100 animate-gradient-y rounded-full h-15 w-15 text-center p-2 text-gray-700 border-2 border-rose-200'>
          Home
        </p>
      </NavLink>
      <nav className='flex space-x-2'>
        <NavLink to="/about" >
          <div className='bg-blue-200 hover:bg-gradient-to-b from-blue-200 to-cyan-100 animate-gradient-y rounded-md h-9 w-16 text-gray-700 text-center border-2 border-rose-200'>
            About
          </div>
        </NavLink>
        <NavLink to="/works">
          <div className='bg-blue-200 hover:bg-gradient-to-b from-blue-200 to-cyan-100 animate-gradient-y rounded-md h-9 w-20 text-gray-700 text-center border-2 border-rose-200'>
            Projects
          </div>
        </NavLink>
        <NavLink to="/contact">
          <div className='bg-blue-200 hover:bg-gradient-to-b from-blue-200 to-cyan-100 animate-gradient-y rounded-md h-9 w-20 text-gray-700 text-center border-2 border-rose-200'>
            Contact
          </div>
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar;