import ProfileTypes from './profile_types';

export let addPost = (postText) => ({
    type: ProfileTypes.ADD_POST,
    postText
})

export let setProfileUsers = (profileUsers) => ({
    type: ProfileTypes.SET_PROFILE_USERS,
    profileUsers
})

export let setProfileStatus = (status) => ({
    type: ProfileTypes.SET_PROFILE_STATUS,
    status
})