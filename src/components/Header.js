import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">
    <img src={logo} alt="logo" className="rounded-circle" width="50" />
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
        <Link className="nav-link" to='/products'>Products</Link>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header

