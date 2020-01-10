import React from 'react';
import style from './ProfileImg.module.css';

const ProfileImg = () => {
    return(
        <div className={style.profile__info}>
            <img className={style.profile__image} src="https://sun9-49.userapi.com/c858328/v858328755/f7db6/kF_Pi5W3Ofk.jpg" />
            <p className={style.profile__name}>Misha sereda</p>
        </div>
        
        
    )
}

export default ProfileImg;