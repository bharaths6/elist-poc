import { 
    FETCH_ALL_USERS,
    FETCH_ALL_USERS_FAILED,
    FETCH_ALL_USERS_SUCCEEDED,
    FETCH_USER_INFO, 
    FETCH_USER_INFO_SUCCEEDED,
    FETCH_USER_INFO_FAILED
} from '../constants/ActionTypes';

export const fetchUserInfo = id => ( {type: FETCH_USER_INFO, id} ) 
export const fetchUserInfoSuceeded = data => ( {type: FETCH_USER_INFO_SUCCEEDED, data} ) 
export const fetchUserInfoFailed = err => ( {type: FETCH_USER_INFO_FAILED, err} ) 

export const fetchAllUsers = () => ( {type: FETCH_ALL_USERS} ) 
export const fetchAllUsersSuceeded = () => ( {type: FETCH_ALL_USERS_SUCCEEDED} ) 
export const fetchAllUsersFailed = () => ( {type: FETCH_ALL_USERS_FAILED} ) 