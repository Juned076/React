import React from 'react';
import { Link } from 'react-router-dom'; // Optional: Only if using React Router

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/home">Arbaani</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" to="/home">Home</Link>
            <Link className="nav-link active" to="/about">About</Link>
            <Link className="nav-link active" to="/service">Service</Link>
            <Link className="nav-link active" to="/contact">Contact</Link>
            <Link className="nav-link btn btn-light-danger ms-5 px-5" to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
