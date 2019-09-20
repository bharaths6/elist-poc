import {
  call, put, takeEvery, fork,
} from 'redux-saga/effects';

import * as actionType from '../constants/ActionTypes';

import {
  getLocalStorage, addLocalStorage, updateLocalStorage, deleteLocalStorage,
} from '../localStorage';

function* createUserInfo(action) {
  try {
    const userList = addLocalStorage(action.info);
    yield put({ type: actionType.CREATE_USER_INFO_SUCCEEDED, userList });
  } catch (e) {
    yield put({ type: actionType.CREATE_USER_INFO_FAILED, message: e.message });
  }
}

function* fetchAllUsers() {
  try {
    const userList = getLocalStorage();
    yield put({ type: actionType.FETCH_ALL_USERS_SUCCEEDED, userList });
  } catch (e) {
    yield put({ type: actionType.FETCH_ALL_USERS_FAILED, message: e.message });
  }
}

function* updateUserInfo(action) {
  try {
    const userList = updateLocalStorage(action.info);
    yield put({ type: actionType.UPDATE_USER_INFO_SUCCEEDED, userList });
  } catch (e) {
    yield put({ type: actionType.UPDATE_USER_INFO_FAILED, message: e.message });
  }
}

function* deleteUserById(action) {
  try {
    const userList = deleteLocalStorage(action.id);
    yield put({ type: actionType.DELETE_USER_BY_ID_SUCCEEDED, userList });
  } catch (e) {
    yield put({ type: actionType.DELETE_USER_BY_ID_FAILED, message: e.message });
  }
}

function* createUserInfoSaga() {
  yield takeEvery(actionType.CREATE_USER_INFO, createUserInfo);
}

function* fetchAllUsersSaga() {
  yield takeEvery(actionType.FETCH_ALL_USERS, fetchAllUsers);
}

function* updateUserInfoSaga() {
  yield takeEvery(actionType.UPDATE_USER_INFO, updateUserInfo);
}

function* deleteUserByIdSaga() {
  yield takeEvery(actionType.DELETE_USER_BY_ID, deleteUserById);
}

export default function* rootSaga() {
  yield fork(createUserInfoSaga);
  yield fork(fetchAllUsersSaga);
  yield fork(updateUserInfoSaga);
  yield fork(deleteUserByIdSaga);
}
