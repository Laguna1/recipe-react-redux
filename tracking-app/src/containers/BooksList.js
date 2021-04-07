import React from 'react';
import MobNav from '../components/MobNav';

const BooksList = () => (
  <div className="books-list">
    <div className="books-content">
      <h4 className="bg-success text-white text-center p-2">All Books</h4>
      <hr />
      <div className="one-book card border-2 mb-2  bg-warning">
        <div className="content d-flex justify-content-between align-items-center p-1">
          <p>Textbooks</p>
          <i className="far fa-2x fa-circle mr-2 text-primary" />
          <button type="button" className="btn btn-success">view info</button>
        </div>
      </div>

      <div className="one-book card border-2 mb-2 bg-warning">
        <div className="content d-flex justify-content-between align-items-center p-1">
          <p>Fiction</p>
          <i className="far fa-2x fa-circle ml-3 text-primary" />
          <button type="button" className="btn btn-success">view info</button>
        </div>
      </div>

    </div>
    <MobNav />
  </div>
);

export default BooksList;
