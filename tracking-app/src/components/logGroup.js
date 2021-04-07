import React from 'react';
import { Link } from 'react-router-dom';

const LogGroup = () => (
  <div className="login-group">
    <div className="login bg-white mx-auto p-2 rounded">
      <h4 className="text-center bg-success py-2 text-white mb-3 rounded">Login user</h4>
      <form>
        <div className="form-group text-left">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
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

        <button
          type="submit"
          className="btn btn-success btn-block"
        >
          Log in
        </button>
        <div className="signup">
          <p className="mt-2 mb-0 ml-auto text-center">Don`t have an account yet?</p>
          <Link to="/registrUser" className="nav-link m-0 bg-primary ml-auto text-center text-white">Sign up</Link>
        </div>
      </form>

    </div>
  </div>
);

export default LogGroup;
