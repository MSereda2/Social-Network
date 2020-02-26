import React from 'react';
import style from './ProfileImg.module.css';
import userImg from '../../../../assets/images/UserImg.png'

const ProfileImg = (props) => {
    
    return(
        <div className={style.profile__info}>
            <img className={style.profile__image} src={props.profileImg === null ? userImg : props.profileImg } alt='profileImg' />
            <p className={style.profile__name}>{props.profileName}</p>
        </div> 
    )
}

export default ProfileImg;