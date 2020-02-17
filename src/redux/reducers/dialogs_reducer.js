const sendMessageType = 'SEND-MESSAGE';
const updateMessageType = 'UPDATE-MESSSAGE-INPUT';

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
    inputMessageValue: '',
    sendMessage() {
    },
    updateMessageInput(message) {
       
    }
  
};

export const dialogs_reducer = (state = initialState, action) => {

    switch(action.type) {
        case sendMessageType: {
            let newMessage = {
                id: 3,
                text: state.inputMessageValue,
                img: "https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg"
            }
            return {
                ...state,
                inputMessageValue: "",
                ItemMessagesUsers: [...state.ItemMessagesUsers, newMessage]
            }
            // stateCopy.ItemMessagesUsers.push(newMessage);
            // stateCopy.inputMessageValue = "";
        }
        case updateMessageType: {
            return {
                ...state,
                inputMessageValue: action.message
            }
            // stateCopy.inputMessageValue = action.message;
        }
        default:
            return state;
    }
}

export const sendMessageActionCreate = () => (
    {type: sendMessageType }
);

export const updateMessageInputActionCreate = (text) => (
   {type: updateMessageType, message: text}
)

export default dialogs_reducer;