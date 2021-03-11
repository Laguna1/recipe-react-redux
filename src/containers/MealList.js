import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Meal from '../components/Meal';
import { API_MAIN, API_SEARCH } from '../constants/api';
import { dataFetchStart, dataFetchSuccess, dataFetchFailure } from '../actions/index';
import '../styles/MealList.css';
// import styled from 'styled-components';

const MealList = ({
  fetchStart, fetchSuccess, fetchFailure, meals, isLoading, isError, search,
}) => {
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
      {isError && <div>Something is wrong ...</div>}
      {isLoading ? (
        <div>Wait...</div>
      ) : (
        <div className="meal-list">
          {meals.map(meal => (<Meal key={meal.idMeal} meal={meal} />))}
        </div>
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
});

const mapDispatchToProps = dispatch => ({
  fetchStart: () => dispatch(dataFetchStart()),
  fetchSuccess: data => dispatch(dataFetchSuccess(data)),
  fetchFailure: () => dispatch(dataFetchFailure()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
