import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => (
  <div className="login-group">
    <div className="signup bg-white mx-auto p-2 rounded">
      <h4 className="text-center bg-success text-white p-2 rounded mb-3">
        <i className="fas fa-chalkboard mr-3" />
        Book Tracker
      </h4>
      <h4 className="text-center bg-success py-2 text-white mb-3 rounded">Sign up here</h4>
      <form>
        <div className="form-group text-left">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group text-left">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group text-left">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="form-group text-left">
          <input
            type="password"
            className="form-control"
            id="password-confirmation"
            placeholder="Confirm your password"
          />
        </div>

        <button
          type="submit"
          className="btn btn-success btn-block"
        >
          Sign up
        </button>
        <div className="signup text-right">
          <p className="mt-2 mb-0 mt-2 mb-0 ml-auto text-center">Already have an account?</p>
          <Link to="/logGroup" className="nav-link m-0 bg-primary text-center text-white rounded ml-auto">Login</Link>
        </div>
      </form>
    </div>
  </div>
);

export default SignupForm;
