import React from 'react';
import style from './dialogs.module.css'
import FriendItem from '../dialogs/friendItem/FriendItem.component';
import DialogItemFriend from '../dialogs/dialogItemFriend/DialogItemFriend';
import DialogItemUser from './dialogItemUser/DialogItemUser.component';
import DialogTopWindow from './dialogsWindowTop/DialogTop.component';


const Dialogs = (props) => {
    const friend =  props.state.ItemMessagesFriends.map(message => (
        <DialogItemFriend text={message.text} img={message.img} />
    ));
    const user = props.state.ItemMessagesUsers.map(message => (
        <DialogItemUser text={message.text} img={message.img} />
    ));


    const dialogsField = React.createRef();

    const sendMessage = () => { props.sendMessage(); };

    const updateMessageInput = () => {
        let text = dialogsField.current.value;
        props.updateMessageInput(text);
    };



    return(
        <div className={style.dialogs}>

            <div className={style.list__friends}>
                {props.state.FriendsItemData.map(friend => (
                    <FriendItem name={friend.name} img={friend.img} id={friend.id} url={`${friend.url}/${friend.id}`} />
                ))}
            </div>

            <div className={style.dialogs__window}>

            < DialogTopWindow name="Миша Середа" />

            <div className={style.dialogs__window_main}>
            {friend}
            {user}
            </div>

            <div className={style.dialogs__bottom}>
                    <input onChange={updateMessageInput} ref={dialogsField} type="text" value={props.state.inputMessageValue}/>
                    <button onClick={sendMessage}><i className="fa fa-send"></i></button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;