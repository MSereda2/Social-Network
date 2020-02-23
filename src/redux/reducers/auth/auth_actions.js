import AuthType from './auth_types';

export const setUsersData = (userId, email, login) => ({
    type: AuthType.SET_USER_DATA,
    data: {userId, email, login}
})