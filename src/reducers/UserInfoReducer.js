import { FETCH_ALL_USERS, FETCH_USER_INFO } from '../constants/ActionTypes';

const initialState = [
    {
        id: '1',
        name: 'MyName',
        exp: '6yrs',
        designation: 'ITA',
        skillset: 'React, Redux, ES6'
    }
  ]

export default function users(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_USERS:
            return state;
        case FETCH_USER_INFO:
            return state;
        default:
            return state;
    }
}