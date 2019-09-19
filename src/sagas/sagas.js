import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_ALL_USERS, FETCH_ALL_USERS_SUCCEEDED, FETCH_ALL_USERS_FAILED } from '../constants/ActionTypes'
// import Api from '...'

function* fetchAllUsers(action) {
   try {
      const user = yield fetch('https://jsonplaceholder.typicode.com/todos/1',).then(res => res.json());
      const userList = [{
         id: '12',
         name: 'BHS',
         exp: '6yrs',
         designation: 'ITA',
         skillset: 'React, Redux, ES6'
     }, {
      id: '13',
      name: 'SHB',
      exp: '2yrs',
      designation: 'SE',
      skillset: 'Angular'
  }]
      yield put({type: FETCH_ALL_USERS_SUCCEEDED, userList});
   } catch (e) {
      yield put({type: FETCH_ALL_USERS_FAILED, message: e.message});
   }
}

function* fetchAllUsersSaga() {
  yield takeEvery(FETCH_ALL_USERS, fetchAllUsers);
}


export default fetchAllUsersSaga;