import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Meal from '../components/Meal';
import CategoryFilter from '../components/CategoryFilter';
import { API_MAIN, API_SEARCH } from '../constants/api';
import {
  dataFetchStart, dataFetchSuccess, dataFetchFailure, changeCategoryAction,
} from '../actions/index';
import '../styles/MealList.css';
// import styled from 'styled-components';

const MealList = ({
  fetchStart, fetchSuccess, fetchFailure, meals, isLoading, isError, search, category,
  changeCategory,
}) => {
  // const handleChangeCategory = event => changeCategory(event.target.value);
  const mealFiltered = category === 'All' ? meals : meals.filter(meal => meal.strCategory === category);
  useEffect(() => {
    const fetchData = async () => {
      fetchStart();
      try {
        const result = await axios(
          `${API_MAIN}${API_SEARCH}${search}`,
        );
        fetchSuccess(result.data);
      } catch (error) {
        fetchFailure();
      }
    };

    fetchData();
  }, [search]);

  return (
    <>
      {isError && <div>Something is wrong. Try again...</div>}
      {isLoading ? (
        <div>Wait...</div>
      ) : (
        <>
          {mealFiltered && mealFiltered.length ? (
            <div className="meal-list">
              {mealFiltered.map(meal => (<Meal key={meal.idMeal} meal={meal} />))}
            </div>
          ) : (
            <div>Sorry, there are no meals this category yet...</div>
          )}
        </>
      )}
    </>
  );
};

MealList.propTypes = {
  fetchStart: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFailure: PropTypes.func.isRequired,
  meals: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  search: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired,
};

MealList.defaultProps = {
  meals: [],
  isError: false,
  isLoading: false,
};

const mapStateToProps = state => ({
  meals: state.data.meals,
  isLoading: state.data.isLoading,
  isError: state.data.isError,
  category: state.categories,
});

const mapDispatchToProps = dispatch => ({
  fetchStart: () => dispatch(dataFetchStart()),
  fetchSuccess: data => dispatch(dataFetchSuccess(data)),
  fetchFailure: () => dispatch(dataFetchFailure()),
  changeCategory: category => dispatch(changeCategoryAction(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
