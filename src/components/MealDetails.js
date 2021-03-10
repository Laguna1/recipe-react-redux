import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_MAIN, API_DETAIL } from '../constants/api';
import '../styles/MealDetails.css';

const MealDetails = () => {
  const [detail, setDetail] = useState({ meals: [] });
  const { id } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      const result = await axios(
        `${API_MAIN}${API_DETAIL}${id}`,
      );

      setDetail(result.data);
    };

    fetchDetail();
  }, []);

  const ingredients = [];
  const quantity = [];

  // Object.entries(detail.meals).forEach(([key, value]) => {
  //   if (key.includes('strIngredient') && value) {
  //     const ingredient = value.split('');
  //     ingredient[0] = ingredient[0].toUpperCase();
  //     ingredients.push(ingredient.join(''));
  //   } else if (key.includes('strMeasure') && value) {
  //     quantity.push(value);
  //   }
  // });

  return (
    detail.meals.map(meal => (
      <div className="details-container" key={meal.idMeal}>
        <div className="details-image-container">
          <img className="details-image" src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
        <div className="details-description">
          <h1 className="meal-name detail-fields">{meal.strMeal}</h1>
          <p className="detail-fields">
            Category:
            {' '}
            {meal.strCategory}
          </p>
          <p className="detail-fields">
            Country:
            {' '}
            {meal.strArea}
          </p>
          <p className="detail-fields">
            Tags:
            {' '}
            {meal.strTags}
          </p>
          <table className="details-table">
            <thead>
              <tr>
                <th aria-label="blank" />
                <th>Ingredients</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {
                ingredients.map((ingredient, i) => (
                  <tr className="row" key={`${ingredient}-${i + 1}`}>
                    <td>{ingredient}</td>
                    <td>{quantity[i]}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div className="instructions">
            <h3>Instructions</h3>
            {meal.strInstructions}
          </div>
          <div className="video-link">
            <h3>Youtube:</h3>
            {meal.strYoutube}
          </div>
        </div>
      </div>
    ))
  );
};

export default MealDetails;
