import { 
    FETCH_ALL_USERS_FAILED,
    FETCH_ALL_USERS_SUCCEEDED,
    FETCH_USER_INFO_SUCCEEDED,
    FETCH_USER_INFO_FAILED
} from '../constants/ActionTypes';

const initialState = {
    userList: [
        {
            id: '1',
            name: 'MyName',
            exp: '6yrs',
            designation: 'ITA',
            skillset: 'React, Redux, ES6'
        }
      ]
}

export default function users(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_USERS_SUCCEEDED:
            return {...state, userList: action.userList};
        case FETCH_USER_INFO_SUCCEEDED:
            return state;
        default:
            return state;
    }
}