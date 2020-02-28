import ProfileTypes from './profile_types';

export let addPost = (postText,profileName, profileImg,) => ({
    type: ProfileTypes.ADD_POST,
    postText,
    profileImg,
    profileName
})

export let setProfileUsers = (profileUsers) => ({
    type: ProfileTypes.SET_PROFILE_USERS,
    profileUsers
})

export let setProfileStatus = (status) => ({
    type: ProfileTypes.SET_PROFILE_STATUS,
    status
})