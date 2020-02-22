import React from 'react';
import style from './profileInfo.module.css';
import Preloder from '../../../common/preloder/Preloder'

const ProfileInfo = (props) => {
        // if(!props.profileInfo) {
        //     return <Preloder />
        // }
        let icons = {...props.contacts};
        let arrIcons = Object.values(icons);
    return(
        <div className={style.profileInfo}>
           <div className={style.profileInfroTop}>
               <h2>About me</h2>
               {props.lookingForAJob === true ? <p>Ес я уже работаю)</p> : <p>ноу я еще не работаю(</p>}
           </div>
           <div>
            <p className={style.aboutMe}>{props.aboutMe}</p>
               {arrIcons.map(i => (<a className={style.socialLinks}>{i}</a>))}
           </div>

        </div>
    )
}

export default ProfileInfo;