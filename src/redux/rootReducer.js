import { combineReducers } from "redux";

import header_reducer from './reducers/header_reducer';
import navbar_reducer from './reducers/nav/nav_reducer';
import profile_reducer from './reducers/profile/profile_reducer';
import dialogs_reducer from './reducers/dialogs/dialogs_reducer';
import users_reducer from './reducers/users/users_reducer';
import music_reducer from './reducers/music_reducer';
import settings_reducer from './reducers/settings_reducer';
import authRedusers from './reducers/auth/auth_reducer';
import appReducer from './reducers/app/app.reducer';

import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    // it's like our state cause
    header: header_reducer,
    navbar: navbar_reducer,
    profilePage: profile_reducer,
    dialogsPage: dialogs_reducer,
    usersPage: users_reducer,
    musicPage: music_reducer,
    settingsPage: settings_reducer,
    authRedusers,
    form: formReducer,
    app: appReducer
})

export default rootReducer