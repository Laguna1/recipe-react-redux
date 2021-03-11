import { createStore, combineReducers } from 'redux';
import mealFetchReducer from './mealReducer';
import categoriesReducer from './categoriesReducer';
import INITIAL_STATE from '../constants/initialState';

const rootReducer = combineReducers({
  data: mealFetchReducer,
  categories: categoriesReducer,
});

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
