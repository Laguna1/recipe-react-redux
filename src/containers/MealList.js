import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <ul>
      {data.meals.map(item => (
        <li key={item.idMeal}>
          {item.strMeal}
          <img src={item.strMealThumb} alt="..." />
        </li>
      ))}
    </ul>
  );
};

export default MealList;
