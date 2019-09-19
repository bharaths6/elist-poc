import { combineReducers } from 'redux';

import users from './UserInfoReducer';

const rootReducer = combineReducers({
    users,
    // import and add more reducers
})

export default rootReducer