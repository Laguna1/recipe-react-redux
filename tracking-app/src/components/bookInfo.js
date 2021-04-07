import React from 'react';
import MobNav from './MobNav';

const BookInfo = () => (
  <div className="book-info mt-2">
    <div className="book-details">
      <div className="infocontent text-center text-white rounded">
        <h3>Book Title</h3>
        <hr />
        <div className="percentinfo w-75 d-flex justify-content-between m-auto">
          <div className="percentcomplete bg-success p-2 text-white rounded mr-3">
            <h1>60%</h1>
            {' '}
            <p>Completed</p>
          </div>
          <div className="percentremain bg-success p-2 text-white rounded ml-3">
            <h1>40%</h1>
            <p>Remaining</p>
          </div>
        </div>
        <hr />

        <div className="detailinfo">

          <div className="detailinfo-item bg-success text-white d-flex justify-content-center py-2 mb-2 mx-5">
            <i className="fas fa-2x fa-book mr-3" />
            <h4>Total Pages : 450</h4>
          </div>

          <div className="detailinfo-item bg-success text-white d-flex justify-content-center py-2 px-2 mb-2 mx-5">
            <i className="fas fa-2x fa-check-circle mr-3" />
            <h4>Pages Completed : 140</h4>
          </div>
        </div>
      </div>

      <div className="btn-count my-2 text-center">
        <button type="button" className="btn btn-info w-75 my-2">Update Progress</button>
        <button type="button" className="btn btn-danger w-75 mb-2">Delete Book</button>
        <button type="button" className="btn btn-secondary w-75">Back</button>

      </div>

    </div>
    <MobNav />
  </div>
);

export default BookInfo;
