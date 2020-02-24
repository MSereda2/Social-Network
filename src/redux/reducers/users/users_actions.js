import userTypes from './users_types';

export let follow = (userID) => ({
    type: userTypes.FOLLOW,
    userID: userID,
});

export let unfollow = (userID) => ({
    type: userTypes.UNFOLLOW,
    userID: userID,
});

export let setUsers = (users) => ({
    type: userTypes.SET_USERS,
    users
});

export let setCurrentPage = (page) => ({
    type: userTypes.SET_CURRENTPAGE,
    page
})

export let setTotalCount = (counts) => ({
    type: userTypes.SET_TOTALCOUNT,
    counts
})

export let toggleFetching = (fetching) => ({
    type: userTypes.TOGGLE_FETCHING,
    isFetching: fetching
})

export let toggleBtnHide = (btnHide) => ({
    type: userTypes.TOGGLE_BTN_HIDE,
    btnHide
})