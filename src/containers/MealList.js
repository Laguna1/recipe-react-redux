import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Meal from '../components/Meal';
import { API_MAIN, API_SEARCH } from '../constants/api';
import '../styles/MealList.css';
// import styled from 'styled-components';

const MealList = ({ search }) => {
  const [data, setData] = useState({ meals: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_MAIN}${API_SEARCH}${search}`,
      );

      setData(result.data);
    };

    fetchData();
  }, [search]);

  return (
    <div className="meal-list">
      {data.meals.map(meal => (<Meal key={meal.idMeal} meal={meal} />))}
    </div>
  );
};

MealList.propTypes = {
  search: PropTypes.string.isRequired,
};

export default MealList;
