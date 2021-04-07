import React from 'react';
import MobNav from './MobNav';

const AddBook = () => (
  <div className="login-info my-5">
    <div className="book-item w-50 bg-white mx-auto mt-5 p-2 rounded">
      <h4 className="text-center bg-success py-2 text-white mb-3 rounded">Add new book</h4>
      <form>
        <div className="form-group text-left">
          <input
            type="text"
            className="form-control"
            id="booktitle"
            placeholder="Enter book title"
          />
        </div>
        <div className="form-group text-left">
          <input
            type="text"
            className="form-control"
            id="authorofbooks"
            placeholder="Enter book`s author"
          />
        </div>
        <div className="form-group text-left">
          <input
            type="number"
            className="form-control"
            id="numberofpages"
            placeholder="Enter number of pages"
          />
        </div>
        <div className="form-group text-left">
          <input
            type="number"
            className="form-control"
            id="bookcompleted"
            placeholder="Number of pages completed"
          />
        </div>

        <button
          type="submit"
          className="btn btn-block btn-success"
        >
          Add Book
        </button>
      </form>
    </div>
    <MobNav />
  </div>
);

export default AddBook;
