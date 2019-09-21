import {
  // FETCH_ALL_USERS_FAILED,
  FETCH_ALL_USERS_SUCCEEDED,
  FETCH_USER_INFO_SUCCEEDED,
  DELETE_USER_BY_ID_SUCCEEDED,
  UPDATE_USER_INFO_SUCCEEDED,
  CREATE_USER_INFO,
  // FETCH_USER_INFO_FAILED
} from '../constants/ActionTypes';

const initialState = [
  {
    id: '1',
    name: 'MyName',
    exp: '6yrs',
    designation: 'ITA',
    skillset: 'React, Redux, ES6',
  },
];

export default function users(prevState = initialState, action) {
  let state = prevState;
  let user = {};
  switch (action.type) {
    case FETCH_ALL_USERS_SUCCEEDED:
      state = action.userList;
      return state;
    case DELETE_USER_BY_ID_SUCCEEDED:
      state = action.userList;
      return state;
    case UPDATE_USER_INFO_SUCCEEDED:
      state = action.userList;
      return state;
    case CREATE_USER_INFO:
      user = action.info;
      user.id = String(Math.floor(Math.random() * 100) + 999);
      return [...state, action.info];
    default:
      return state;
  }
}
