import React from 'react';
import style from './ProfileImg.module.css';
import userImg from '../../../../assets/images/UserImg.png'
// import Preloder from '../../../common/preloder/Preloder'

const ProfileImg = (props) => {
    // if(!props.profileImg) {
    //     return <Preloder />
    // }
    return(
        <div className={style.profile__info}>
            <img className={style.profile__image} src={props.profileImg ==! null ? props.profileImg : userImg} alt='profileImg' />
            <p className={style.profile__name}>{props.profileName}</p>
        </div>
        
        
    )
}

export default ProfileImg;