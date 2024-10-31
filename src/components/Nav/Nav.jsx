import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
        <Link className="nav__link" to={"/"}>Home</Link>
        <a className="nav__link" href="#contacts__id">Contacts</a>
        <Link className="nav__link" to={"/excursions"}>Excursions</Link>
        <Link className="nav__link nav__tours" to={"/tours"}>Tour</Link>
    </nav>
  )
}

export default Nav;
