import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Meal from '../components/Meal';
import { API_MAIN, API_SEARCH } from '../constants/api';
import '../styles/MealList.css';

const MealList = () => {
  const [data, setData] = useState({ meals: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_MAIN}${API_SEARCH}a`,
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="meal-list">
      {data.meals.map(meal => (<Meal key={meal.idMeal} meal={meal} />))}
    </div>
  );
};

export default MealList;
