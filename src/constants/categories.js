const CATEGORIES = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Goat'];

const selectCategories = CATEGORIES.map(category => (
  <option key={category} value={category}>{category}</option>
));

export default selectCategories;
