import React from 'react';
import MealList from '../containers/MealList';
import SearchByLetter from './SearchByLetter';
import Footer from '../layouts/Footer';

const App = () => (
  <>
    <SearchByLetter />
    <MealList />
    <Footer />
  </>
);

export default App;
