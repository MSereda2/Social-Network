import NavTypes from './nav_types';

const initialState =  {
    NavLinkData: [
        {
            id: 1,
            to: '/profile/2',
            name: 'Profile',
            icon: 'fa fa-user'
        },
        {
            id: 2,
            to: '/dialogs',
            name: 'Message',
            icon: 'fa fa-inbox'
        },
        {
            id: 3,
            to: '/users',
            name: 'Users',
            icon: 'fa fa-book'
        },
        {
            id: 4,
            to: '/music',
            name: 'Music',
            icon: 'fa fa-music'
        },
        {   
            id: 5,
            to: '/settings',
            name: 'Settings',
            icon: 'fa fa-cog'
        },
    ]
};

const nav_reducer = (state = initialState, action) => {

    switch(action.type) {
        case NavTypes.SET_PROFILE_ID: {
            return {
                ...state,
                NavLinkData: state.NavLinkData[0].to = action.profileId
            }
        }
        default: return state;
    }

}

export default nav_reducer;