import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav">
    <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100 d-none">
      <a className="navbar-brand text-white" href="google.com">Book Tracker</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/homePage" className="nav-link text-white">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/BooksList" className="nav-link text-white">All Books</Link>
          </li>

          <li className="nav-item">
            <Link to="/BookInfo" className="nav-link text-white">Book Info</Link>
          </li>
          <li className="nav-item">
            <Link to="/addBook" className="nav-link text-white">Add Book</Link>
          </li>
          <li className="nav-item">
            <Link to="/logGroup" className="nav-link text-white">Log in</Link>
          </li>
          <li className="nav-item">
            <Link to="/registrUser" className="nav-link text-white">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
