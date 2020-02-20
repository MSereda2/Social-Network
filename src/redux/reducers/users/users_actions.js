import userTypes from './users_types';

export let followAC = (userID) => ({
    type: userTypes.FOLLOW,
    userID: userID,
});

export let unfollowAC = (userID) => ({
    type: userTypes.UNFOLLOW,
    userID: userID,
});

export let setUsers = (users) => ({
    type: userTypes.SET_USERS,
    users
});