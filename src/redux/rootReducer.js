import { combineReducers } from "redux";

import header_reducer from './reducers/header_reducer';
import navbar_reducer from './reducers/nav_reducer';
import profile_reducer from './reducers/profile_reducer';
import dialogs_reducer from './reducers/dialogs/dialogs_reducer';
import users_reducer from './reducers/users/users_reducer';
import music_reducer from './reducers/music_reducer';
import settings_reducer from './reducers/settings_reducer';

const rootReducer = combineReducers({
    // it's like our state cause
    header: header_reducer,
    navbar: navbar_reducer,
    profilePage: profile_reducer,
    dialogsPage: dialogs_reducer,
    usersPage: users_reducer,
    musicPage: music_reducer,
    settingsPage: settings_reducer
})

export default rootReducer