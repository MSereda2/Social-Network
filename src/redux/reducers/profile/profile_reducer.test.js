import profileReducer from './profile_reducer';
import {addPost} from './profile_actions';

let newState = profileReducer({}, {})

it('new post added', () => {
    // 1. test data
    let action = addPost('just new at this field')
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
    };
    // 2. action
    let newState = profileReducer(initialState, action)
    // 3. expectation
    expect(initialState.PostData.length).toBe(2)
})