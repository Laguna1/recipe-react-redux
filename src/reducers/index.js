import { createStore, combineReducers } from 'redux';
import mealFetchReducer from './mealReducer';
import INITIAL_STATE from '../constants/initialState';

const rootReducer = combineReducers({
  data: mealFetchReducer,
});

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
