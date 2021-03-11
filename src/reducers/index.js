import { createStore, combineReducers } from 'redux';
import mealFetchReducer from './mealReducer';
import categoriesReducer from './categoriesReducer';
import detailsReducer from './detailsReducer';
import INITIAL_STATE from '../constants/initialState';

const rootReducer = combineReducers({
  data: mealFetchReducer,
  categories: categoriesReducer,
  details: detailsReducer,
});

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
