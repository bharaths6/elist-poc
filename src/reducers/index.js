import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import users from './UserInfoReducer';

const rootReducer = combineReducers({
  users,
  form: formReducer,
  // import and add more reducers
});

export default rootReducer;
