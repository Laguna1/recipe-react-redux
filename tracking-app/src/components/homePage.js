import React from 'react';
import MobNav from './MobNav';

const HomePage = () => (
  <div className="home-page">
    <div className="home-info rounded">
      <h4 className="text-center bg-success text-white p-4 rounded mb-3">
        <i className="fas fa-chalkboard" />
        {' '}
        Book Tracker
      </h4>
      <p className="text-center">
        Some Info about Book tracker
      </p>
    </div>
    <MobNav />
  </div>
);

export default HomePage;
