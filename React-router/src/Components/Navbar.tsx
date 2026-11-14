import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to='/home'>Home</Link>
      <br></br>
      <Link to='/about'>About</Link>
      <br></br>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}
