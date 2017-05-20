import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import ActionTypes from '@actions/actionTypes';

export const initialState = Immutable({
    attempt: false,
    error: null,
    products: null,
    success: false,
});

const attempt = (state, action) => ({
    ...state,
    attempt: true,
    error: null,
    products: null,
    success: false,
});

const success = (state, action) => ({
    ...state,
    attempt: false,
    error: null,
    success: true,
    products: action.products,
});

const failure = (state, action) => ({
    ...state,
    attempt: false,
    error: action.error,
    success: false,
    products: null,
});


const actionHandlers = {
    [ActionTypes.SEARCH_ATTEMPT]: attempt,
    [ActionTypes.SEARCH_SUCCESS]: success,
    [ActionTypes.SEARCH_FAILED]: failure,
};

export default createReducer(initialState, actionHandlers);