import Profile_types from './profile_types';
import ProfileTypes from './profile_types';



const initialState =  {
    PostData: [
        {
            id: 1,
            image: "https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg",
            name: "Misha Sereda",
            visit: "1 hour ago",
            description: "Я хочу развить навыки соблазненич",
            commentsCount: 25,
            likesCount: 100,
            sharedCount: 39
        },
        {
            id: 2,
            image: "https://muz-tv.ru/storage/pic/6/6/6673d0a96eb4c1a269fca73c1d207347.jpg",
            name: "face pill",
            visit: "50 minutes ago",
            description: "Work your ass off",
            commentsCount: 100,
            likesCount: 2456,
            sharedCount: 234
        },
        
    ],
    profileUsers: null,
    profileStatus: ''
};


const profile_reducer = (state = initialState ,action) => {

    switch(action.type) {
        case Profile_types.ADD_POST: 
            let newPost = {
                id: 3,
                image: action.profileImg,
                name: action.profileName,
                visit: '50 minutes ago',
                description: action.postText,
                commentsCount: 5,
                likesCount: 129,
                sharedCount: 10,
            }

            return {
                ...state,
                PostData: [...state.PostData, newPost],
            }
        case Profile_types.DELETE_POST:
            return {
                ...state,
                PostData: state.filter()
            }
        case Profile_types.UPDATE_INPUT:
            return {
                ...state,
                newTextInput: action.text,
            }
        case Profile_types.SET_PROFILE_USERS:
            return {
                ...state,
                profileUsers: action.profileUsers
            }
        case ProfileTypes.SET_PROFILE_STATUS:
            return {
                ...state,
                profileStatus: action.status
            }
        default: return state;
    }
    
}



export default profile_reducer;