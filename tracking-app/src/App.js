import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import React from 'react';
import Navbar from './components/navbar';
import LogGroup from './components/logGroup';
import SignupForm from './components/registrUser';
import HomePage from './components/homePage';
import AddBook from './components/addBook';
import BookInfo from './components/bookInfo';
import BooksList from './containers/BooksList';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/logGroup" />
        </Route>
        <Route exac path="/homePage" component={HomePage} />
        <Route exac path="/logGroup" component={LogGroup} />
        <Route exac path="/registrUser" component={SignupForm} />
        <Route exac path="/addBook" component={AddBook} />
        <Route exac path="/BookInfo" component={BookInfo} />
        <Route exac path="/BooksList" component={BooksList} />
      </Switch>
    </div>
  </Router>
);
export default App;
