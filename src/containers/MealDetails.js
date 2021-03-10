import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MealDetails = () => {
  const [detail, setDetail] = useState({ meals: [] });

  useEffect(() => {
    const fetchDetail = async () => {
      const result = await axios(
        'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772',
      );

      setDetail(result.data);
    };

    fetchDetail();
  }, []);

  // const ingredients = [];
  // const quantity = [];

  // if (!isLoading) {
  //   Object.entries(recipe).forEach(([key, value]) => {
  //     if (key.includes('strIngredient') && value) {
  //       const ingredient = value.split('');
  //       ingredient[0] = ingredient[0].toUpperCase();
  //       ingredients.push(ingredient.join(''));
  //     } else if (key.includes('strMeasure') && value) {
  //       quantity.push(value);
  //     }
  //   });
  // }

  return (
    detail.meals.map(meal => (
      <div className="details-container" key={meal.idMeal}>
        <div className="details-image-container">
          {/* <img className="details-image" src={drink.strDrinkThumb} alt={drink.strDrink} /> */}
        </div>
        <div className="details-description">
          <h1>{meal.strMeal}</h1>
          <p>
            Category:
            {' '}
            {meal.strCategory}
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
              <tr>
                <td>1.</td>
                <td>{meal.strIngredient1}</td>
                <td>{meal.strMeasure1}</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>{meal.strIngredient2}</td>
                <td>{meal.strMeasure2}</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>{meal.strIngredient3}</td>
                <td>{meal.strMeasure3}</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>{meal.strIngredient4}</td>
                <td>{meal.strMeasure4}</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>{meal.strIngredient5}</td>
                <td>{meal.strMeasure5}</td>
              </tr>
              <tr>
                <td>6.</td>
                <td>{meal.strIngredient6}</td>
                <td>{meal.strMeasure6}</td>
              </tr>
              <tr>
                <td>7.</td>
                <td>{meal.strIngredient7}</td>
                <td>{meal.strMeasure7}</td>
              </tr>
              <tr>
                <td>8.</td>
                <td>{meal.strIngredient8}</td>
                <td>{meal.strMeasure8}</td>
              </tr>
              <tr>
                <td>9.</td>
                <td>{meal.strIngredient9}</td>
                <td>{meal.strMeasure9}</td>
              </tr>
              <tr>
                <td>10.</td>
                <td>{meal.strIngredient10}</td>
                <td>{meal.strMeasure10}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ))
  );
};

export default MealDetails;
