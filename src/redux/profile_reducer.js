const addpostType = 'ADD-POST';
const onChangeInputType = 'UPDATE-INPUT-VALUE';

const profile_reducer = (state,action) => {
    if(action.type === addpostType) {
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
        state.PostData.push(newPost);
        state.newTextInput = '';
    } else if(action.type === onChangeInputType) {
        state.newTextInput = action.text;
    }

    return state;
}

export default profile_reducer;