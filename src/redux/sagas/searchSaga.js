import { put, call, takeLatest } from 'redux-saga/effects';
import Types from '@redux/actions/actionTypes';
import api from '@api/';
import { searchSuccess, searchFailure } from '@redux/actions/search';

const apis = api.create('Global.API_URL');

function* runSearch(action) {
  try {
    console.log('Sagas: (search paramerts), ', action.param);
    const result = yield call(apis.searchAPI, action.param);
    console.log('Sagas Result:', result);
    if(result){
      yield put(searchSuccess(result));
    } else {
      yield put(searchFailure('error'));
    }
  }catch (error) {
    yield put(searchFailure('error'));
  }
}

export function* searchAttempt() {
  yield takeLatest(Types.SEARCH_ATTEMPT, runSearch);
}