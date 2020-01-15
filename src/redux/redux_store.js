import {combineReducers, createStore} from 'redux';

import header_reducer from './reducers/header_reducer';
import navbar_reducer from './reducers/nav_reducer';
import profile_reducer from './reducers/profile_reducer';
import dialogs_reducer from './reducers/dialogs_reducer';
import news_reducer from './reducers/news_reducer';
import music_reducer from './reducers/music_reducer';
import settings_reducer from './reducers/settings_reducer';

let reducers = combineReducers({ // Этот объект можно воспринимать как state а не связка reducer
    header: header_reducer,
    navbar: navbar_reducer,
    profilePage: profile_reducer,
    dialogsPage: dialogs_reducer,
    newsPage: news_reducer,
    musicPage: music_reducer,
    settingsPage: settings_reducer
});

let store = createStore(reducers);

window.store = store;
export default store;