import LoginTypes from './login.types'

export let setLogin = (userID) => ({
    type: LoginTypes.SET_LOGIN,
    userID
})