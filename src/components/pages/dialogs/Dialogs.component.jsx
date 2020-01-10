import React from 'react';
import style from './dialogs.module.css'
import FriendItem from '../dialogs/friendItem/FriendItem.component';
import DialogItemFriend from '../dialogs/dialogItemFriend/DialogItemFriend';
import DialogItemUser from './dialogItemUser/DialogItemUser.component';


const Dialogs = () => {
    return(
        <div className={style.dialogs}>
            {/* LIST FRIENDS */}
            <div className={style.list__friends}>
                <FriendItem name="Миша Середа" img="https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg" />
                <FriendItem name="Петя Михаличенко" img="https://sun9-35.userapi.com/c854428/v854428792/bec53/QJzoJ4tIamo.jpg" />
                <FriendItem name="Мустафа Куртбеков" img="https://sun9-21.userapi.com/c858016/v858016505/140e94/OMRyRJ3Rngc.jpg" />
                <FriendItem name="Daria zaminina" img="https://sun9-56.userapi.com/c626619/v626619699/52a2c/93cmNcF__Bc.jpg" />
            </div>
            {/* END LIST OF FRIENDS */}

            {/* DIALOGS */}
            <div className={style.dialogs__window}>
                {/* dialogs top */}
                <div className={style.dialogs__window_top}>
                   <p> Миша Середа</p>
                </div>
                {/* dialogs top end */}

                {/* dialogs main */}
                <div className={style.dialogs__window_main}>
                    <DialogItemFriend text="Слушай красавчик понакидай мне музыки пожалуйста и знай ты капец какой красивый ты самец" img="https://sun9-56.userapi.com/c626619/v626619699/52a2c/93cmNcF__Bc.jpg" />
                    <DialogItemUser text="хахах спс я всегда знал это" img="https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg" />
                    
                </div>
                {/* dialogs main end */}

                {/* dialogs bottom */}
                <div className={style.dialogs__bottom}>
                    <input type="text" placeholder="Write message..."/>
                    <button><i className="fa fa-send"></i></button>
                </div>
                {/* dialogs bottom end */}

            </div>
            {/* END OF DIALOGS */}

        </div>
    )
}

export default Dialogs;