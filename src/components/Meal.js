import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Meal.css';

const Meal = ({ meal }) => (
  <div className="meal-container" style={{ backgroundImage: `url(${meal.strMealThumb})` }}>
    <Link to="/details" className="meal-button" type="button">{meal.srtMeal}</Link>
  </div>
);

Meal.propTypes = {
  strMealThumb: PropTypes.string,
  srtMeal: PropTypes.string,
}.isRequired;

export default Meal;
