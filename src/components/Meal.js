import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Meal.css';

const Meal = ({ meal }) => (
  <div className="meal-container" style={{ backgroundImage: `url(${meal.strMealThumb})` }}>
    <div className="meal-bottom">
      <div className="meal-name">{meal.strMeal}</div>
      <button type="button">Meal Details</button>
    </div>
  </div>
);

Meal.propTypes = {
  strMealThumb: PropTypes.string,
  srtMeal: PropTypes.string,
}.isRequired;

export default Meal;
