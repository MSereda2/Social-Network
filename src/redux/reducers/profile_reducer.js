const addpostType = 'ADD-POST';
const onChangeInputType = 'UPDATE-INPUT-VALUE';

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
    newTextInput: '',
};

const profile_reducer = (state = initialState ,action) => {

    switch(action.type) {
        case addpostType: 
            let newPost = {
                id: 3,
                image: 'https://muz-tv.ru/storage/pic/6/6/6673d0a96eb4c1a269fca73c1d207347.jpg',
                name: "face",
                visit: '50 minutes ago',
                description: state.newTextInput,
                commentsCount: 5,
                likesCount: 129,
                sharedCount: 10,
            }

            return {
                ...state,
                PostData: [...state.PostData, newPost],
                newTextInput: '',

            };
        
        case onChangeInputType:
            return {
                ...state,
                newTextInput: action.text,
            }
        default: return state;
    }
    
}

export const addPostActionCreate = () => (
    {type: addpostType }
);

export const onChangeInputActionCreate = (text) => (
    {type: onChangeInputType,
     text: text
    }
);

export default profile_reducer;