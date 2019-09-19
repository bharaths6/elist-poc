import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_ALL_USERS, FETCH_ALL_USERS_SUCCEEDED, FETCH_ALL_USERS_FAILED } from '../constants/ActionTypes'
// import Api from '...'

function* fetchAllUsers(action) {
   debugger;
   try {
      const user = yield fetch('https://jsonplaceholder.typicode.com/todos/1',).then(res => res.json());
      debugger;
      yield put({type: FETCH_ALL_USERS_SUCCEEDED, user});
   } catch (e) {
      yield put({type: FETCH_ALL_USERS_FAILED, message: e.message});
   }
}

function* fetchAllUsersSaga() {
  yield takeEvery(FETCH_ALL_USERS, fetchAllUsers);
}


export default fetchAllUsersSaga;