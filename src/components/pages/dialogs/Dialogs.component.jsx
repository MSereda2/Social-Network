import React from 'react';
import style from './dialogs.module.css'
import FriendItem from '../dialogs/friendItem/FriendItem.component';
import DialogItemFriend from '../dialogs/dialogItemFriend/DialogItemFriend';
import DialogItemUser from './dialogItemUser/DialogItemUser.component';
import DialogTopWindow from './dialogsWindowTop/DialogTop.component';


const Dialogs = (props) => {
    const friend =  props.ItemMessagesFriends.map(message => (
        <DialogItemFriend text={message.text} img={message.img} />
    ));
    const user = props.ItemMessagesUsers.map(message => (
        <DialogItemUser text={message.text} img={message.img} />
    ));

    return(
        <div className={style.dialogs}>

            <div className={style.list__friends}>
                {props.friendsItem.map(friend => (
                    <FriendItem name={friend.name} img={friend.img} id={friend.id} />
                ))}
            </div>

            <div className={style.dialogs__window}>

            < DialogTopWindow name="Миша Середа" />

            <div className={style.dialogs__window_main}>
            {friend}
            {user}
            </div>

            <div className={style.dialogs__bottom}>
                    <input type="text" placeholder="Write message..."/>
                    <button><i className="fa fa-send"></i></button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;