import React from 'react';
import Dialogs from './Dialogs.component';

import {sendMessageAC} from '../../../redux/reducers/dialogs/dialogs_actions';


import {connect} from 'react-redux';

import {withAuthRedirect} from '../../HOC/withAuthRedirect'
import { compose } from 'redux';


class DialogContainer extends React.Component {


    render() { return <Dialogs {...this.props} /> }
    
}


const MapStateToProps = (state) => ({
    ItemMessagesFriends: state.dialogsPage.ItemMessagesFriends,
    ItemMessagesUsers: state.dialogsPage.ItemMessagesUsers,
    FriendsItemData: state.dialogsPage.FriendsItemData,
})

export default compose(
    connect(MapStateToProps, {sendMessageAC}),
    withAuthRedirect
)(DialogContainer)