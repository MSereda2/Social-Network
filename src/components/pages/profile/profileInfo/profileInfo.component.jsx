import React from 'react';
import style from './profileInfo.module.css';

import ProfileStatus from '../profileStatus/ProfileStatus'

const ProfileInfo = (props) => {
       
        let icons = {...props.contacts};
        let arrIcons = Object.values(icons);

    return(
        <>
            <ProfileStatus status={props.profileStatus} />
            <div className={style.profileInfo}>
                <div className={style.profileInfroTop}>
                    <h2>About me</h2>
                    {props.lookingForAJob === true ? <p>Ес я уже работаю)</p> : <p>ноу я еще не работаю(</p>}
                </div>
                <div>
                    <p className={style.aboutMe}>{props.aboutMe}</p>
                    {arrIcons.map(i => (<span className={style.socialLinks}>{i}</span>))}
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;