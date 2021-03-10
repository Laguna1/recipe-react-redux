import React from 'react';
import { Route } from 'react-router-dom';
import MealList from '../containers/MealList';
import SearchByLetter from './SearchByLetter';
import Footer from '../layouts/Footer';

const App = () => (
  <>
    <SearchByLetter />
    {/* <Route exact path="/">
      <Catalogue />
    </Route> */}
    <Route exact path="/:id">
      <MealList />
    </Route>
    <Footer />
  </>
);

export default App;
