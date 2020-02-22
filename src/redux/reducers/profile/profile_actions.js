import ProfileTypes from './profile_types';

export let addPost = () => ({
    type: ProfileTypes.ADD_POST
})

export let changeInput = (text) => ({
    type: ProfileTypes.UPDATE_INPUT,
    text
})

export let setProfileUsers = (profileUsers) => ({
    type: ProfileTypes.SET_PROFILE_USERS,
    profileUsers
})