import * as actionType from '../constants/ActionTypes';

export const fetchUserInfo = (id) => ({ type: actionType.FETCH_USER_INFO, id });
export const fetchUserInfoSuceeded = (data) => ({ type: actionType.FETCH_USER_INFO_SUCCEEDED, data });
export const fetchUserInfoFailed = (err) => ({ type: actionType.FETCH_USER_INFO_FAILED, err });

export const fetchAllUsers = () => ({ type: actionType.FETCH_ALL_USERS });
export const fetchAllUsersSuceeded = () => ({ type: actionType.FETCH_ALL_USERS_SUCCEEDED });
export const fetchAllUsersFailed = () => ({ type: actionType.FETCH_ALL_USERS_FAILED });

export const deleteUserById = (id) => ({ type: actionType.DELETE_USER_BY_ID, id });

export const updateUserInfo = (info) => ({ type: actionType.UPDATE_USER_INFO, info });

export const createUserInfo = (info) => ({ type: actionType.CREATE_USER_INFO, info });
