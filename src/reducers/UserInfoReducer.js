import {
  // FETCH_ALL_USERS_FAILED,
  FETCH_ALL_USERS_SUCCEEDED,
  FETCH_USER_INFO_SUCCEEDED,
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
  switch (action.type) {
    case FETCH_ALL_USERS_SUCCEEDED:
      debugger;
      state = action.userList;
      return state;
    case FETCH_USER_INFO_SUCCEEDED:
      return state;
    default:
      return state;
  }
}