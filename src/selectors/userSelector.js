import { createSelector } from 'reselect';

const st = state => state
export const selectUserInfo = createSelector(
    [st],
    todos => todos
)