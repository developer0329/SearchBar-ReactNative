import { combineReducers } from 'redux-immutable';
import searchReducer from './searchReducer';

const applicationReducers = {
  searchReducer,
};

export default function createReducer() {
  return combineReducers(applicationReducers);
}
