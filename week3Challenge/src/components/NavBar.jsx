import React from 'react'
import { NavLink, Link } from 'react-router-dom'
//Para React - Link o NavLink
export function NavBar() {
  return (
    <>
    <nav className='bg-lightBlue  p-4 flex justify-evenly m-3 rounded-lg shadow-xl'>
      <NavLink to='/' className='bg-lightYellow px-6 rounded-lg shadow-md'>Home</NavLink>
      <NavLink to='/About' className='bg-lightYellow px-6 rounded-lg shadow-md hover:bg-pink transition-colors duration-200 ease-in-out'>About</NavLink>
      <NavLink to='/Movies' className='bg-lightYellow px-6 rounded-lg shadow-md'>Movies</NavLink>  
    </nav>
    </>
  )
}
