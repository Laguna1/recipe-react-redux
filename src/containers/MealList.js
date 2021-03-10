import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Meal from '../components/Meal';
import '../styles/MealList.css';

const MealList = () => {
  const [data, setData] = useState({ meals: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://www.themealdb.com/api/json/v1/1/search.php?f=a',
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
