import React from 'react';
import { Link } from 'react-router-dom';

const MobNav = () => (
  <div className="mob-nav">
    <div className="nav-content text-white bg-dark">

      <div className="nav-item-easy">
        <Link to="/addBook" className="text-white">
          <i className="fas fa-plus-circle" />
          <p>Add Book</p>
        </Link>
      </div>
      <div className="nav-item-easy">
        <i className="fas fa-chart-line" />
        <p>Track Book</p>
      </div>
      <div className="nav-item-easy">
        <i className="fas fa-chart-pie" />
        <p>Progress Report</p>
      </div>
      <div className="nav-item-easy">
        <Link to="/homePage" className="text-white">
          <i className="fas fa-home" />
          <p>Home</p>
        </Link>
      </div>

    </div>

  </div>
);

export default MobNav;
