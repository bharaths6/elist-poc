import { createSelector } from 'reselect';

const st = state => state
export const selectUserInfo = createSelector(
    [st],
    eList => eList && eList.users && eList.users.userList
)