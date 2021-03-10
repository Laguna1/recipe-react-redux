import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Meal.css';

const Meal = ({ meal }) => (
  <div className="meal-container" style={{ backgroundImage: `url(${meal.strMealThumb})` }}>
    <button className="meal-button" type="button">{meal.srtMeal}</button>
  </div>
);

Meal.propTypes = {
  strMealThumb: PropTypes.string,
  srtMeal: PropTypes.string,
}.isRequired;

export default Meal;
