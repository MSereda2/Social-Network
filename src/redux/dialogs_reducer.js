const sendMessageType = 'SEND-MESSAGE';
const updateMessageType = 'UPDATE-MESSSAGE-INPUT';

export const dialogs_reducer = (state, action) => {

    if(action.type === sendMessageType) {
        let newMessage = {
            id: 3,
            text: state.inputMessageValue,
            img: "https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg"
        }
        state.ItemMessagesUsers.push(newMessage);
        state.inputMessageValue = "";
    } else if(action.type === updateMessageType) {
        state.inputMessageValue = action.message;
    }

    return state;
}

export default dialogs_reducer;