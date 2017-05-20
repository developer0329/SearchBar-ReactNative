import ActionTypes from './actionTypes';

export const searchAttempt = param =>
  ({ type: ActionTypes.SEARCH_ATTEMPT, param });
export const searchSuccess = products =>
  ({ type: ActionTypes.SEARCH_SUCCESS, products });
export const searchFailure = error =>
  ({ type: ActionTypes.SEARCH_FAILED, error });