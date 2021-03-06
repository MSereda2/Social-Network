import React from 'react';
import style from './dialogs.module.css'
import FriendItem from '../dialogs/friendItem/FriendItem.component';
import DialogItemFriend from '../dialogs/dialogItemFriend/DialogItemFriend';
import DialogItemUser from './dialogItemUser/DialogItemUser.component';
import DialogTopWindow from './dialogsWindowTop/DialogTop.component';
import SendMessageForm from './sendMessageForm/SendMessageForm';




const Dialogs = (props) => {
    const friend =  props.ItemMessagesFriends.map(message => (
        <DialogItemFriend text={message.text} img={message.img} />
    ));
    const user = props.ItemMessagesUsers.map(message => (
        <DialogItemUser text={message.text} img={message.img} />
    ));

   const sendMessage = (formData) => {
        props.sendMessageAC(formData.sendMessage)
   }

    return(
        <div className={style.dialogs}>
            <div className={style.list__friends}>
                {props.FriendsItemData.map(friend => (
                    <FriendItem name={friend.name} img={friend.img} id={friend.id} url={`${friend.url}/${friend.id}`} />
                ))}
            </div>

            <div className={style.dialogs__window}>
                <DialogTopWindow name="Миша Середа" />
                <div className={style.dialogs__window_main}>
                    {friend}
                    {user}
                </div>
                <SendMessageForm onSubmit={sendMessage} />
            </div>
        </div>
    )
}

export default Dialogs;