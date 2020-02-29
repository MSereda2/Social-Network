import DialogsTypes from './dialogs_types';

const initialState =  {
    FriendsItemData: [
        {
            name: "Миша Середа",
            img: "https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg",
            id: 1,
            url: `/dialogs`
        },
        {
            name: "Петя Михаличенко",
            img: "https://sun9-35.userapi.com/c854428/v854428792/bec53/QJzoJ4tIamo.jpg",
            id: 2,
            url: `/dialogs`
        },
        {
            name: "Мустафа куртбеков",
            img: "https://sun9-21.userapi.com/c858016/v858016505/140e94/OMRyRJ3Rngc.jpg",
            id: 3,
            url: `/dialogs`
        },
        {
            name: "Daria Zaminina",
            img: "https://sun9-56.userapi.com/c626619/v626619699/52a2c/93cmNcF__Bc.jpg",
            id: 4,
            url: `/dialogs`
        },
        {
            name: "Катя Картинская",
            img: "https://sun9-8.userapi.com/c856520/v856520157/7e517/7p99z8vSGKg.jpg",
            id: 5,
            url: `/dialogs`
        },
    ],
    ItemMessagesFriends: [
        {
            text: "Привет)",
            img: "https://sun9-56.userapi.com/c626619/v626619699/52a2c/93cmNcF__Bc.jpg",
        },
        {
            text: "Слушай красавчик понакидай мне музыки пожалуйста у тебя шикарный вкус",
            img: "https://sun9-56.userapi.com/c626619/v626619699/52a2c/93cmNcF__Bc.jpg",
        },
        {
            text: "Не торопись выбирай тщательней",
            img: "https://sun9-56.userapi.com/c626619/v626619699/52a2c/93cmNcF__Bc.jpg",
        },
        
        
        
    ],
    ItemMessagesUsers: [
        {
            id: 1,
            text: "хахах спс ты конечно тоже обезбашеная. Мне это нравиться",
            img: "https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg"
        },
        {
            id: 2,
            text: "Ок, сек.",
            img: "https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg"
        },
        
    
    ],
};

export const dialogs_reducer = (state = initialState, action) => {

    switch(action.type) {
        case DialogsTypes.SEND_MESSAGE: {
            let newMessage = {
                id: 3,
                text: action.message,
                img: "https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg"
            }
            return {
                ...state,
                ItemMessagesUsers: [...state.ItemMessagesUsers, newMessage]
            }
           
        }
        default:
            return state;
    }
}


export default dialogs_reducer;