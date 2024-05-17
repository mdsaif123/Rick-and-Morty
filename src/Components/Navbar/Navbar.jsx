import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
  <h5 className="text-center navbar-brand">Rick & Morty - App</h5>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" activeNavClass className="nav-link" >Characters</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/episode" className="nav-link">Episode</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
