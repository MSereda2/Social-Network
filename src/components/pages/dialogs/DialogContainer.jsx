import React from 'react';
import Dialogs from './Dialogs.component';

import {sendMessageActionCreate, updateMessageInputActionCreate} from '../../../redux/reducers/dialogs/dialogs_actions';


import {connect} from 'react-redux';

import {withAuthRedirect} from '../../HOC/withAuthRedirect'


let DialogContainer = (props) => {

    return <Dialogs {...props} />
}

let AuthRedirectComponent = withAuthRedirect(DialogContainer)

const MapStateToProps = (state) => ({
    ItemMessagesFriends: state.dialogsPage.ItemMessagesFriends,
    ItemMessagesUsers: state.dialogsPage.ItemMessagesUsers,
    inputMessageValue: state.dialogsPage.inputMessageValue,
    FriendsItemData: state.dialogsPage.FriendsItemData,
    isAuth: state.authRedusers.isAuth
})


export default connect(MapStateToProps, {
    sendMessageActionCreate,
    updateMessageInputActionCreate
})(AuthRedirectComponent)