import React from 'react';
import Dialogs from './Dialogs.component';

import {sendMessageActionCreate, updateMessageInputActionCreate} from '../../../redux/reducers/dialogs_reducer';


import {connect} from 'react-redux';

let DialogContainer = (props) => (
    <Dialogs 
        ItemMessagesFriends={props.ItemMessagesFriends}
        ItemMessagesUsers={props.ItemMessagesUsers}
        inputMessageValue={props.inputMessageValue}
        FriendsItemData={props.FriendsItemData}
        sendMessage={props.sendMessage}
        updateMessageInput={props.updateMessageInput} />
)       

const MapStateToProps = (state) => ({
    ItemMessagesFriends: state.dialogsPage.ItemMessagesFriends,
    ItemMessagesUsers: state.dialogsPage.ItemMessagesUsers,
    inputMessageValue: state.dialogsPage.inputMessageValue,
    FriendsItemData: state.dialogsPage.FriendsItemData
})

const MapDispatchToProps = (dispatch) => ({
    sendMessage: () => {dispatch(sendMessageActionCreate())},
    updateMessageInput: (text) => {dispatch(updateMessageInputActionCreate(text))},

})

export default connect(MapStateToProps, MapDispatchToProps)(DialogContainer)