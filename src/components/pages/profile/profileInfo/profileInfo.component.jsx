import React from 'react';
import style from './profileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div className={style.profileInfo}>
           <div className={style.profileInfroTop}>
               <h2>About me</h2>
               <p>Web developer</p>
           </div>
           <div className={style.profileInfoDescription}>
               <p className={style.profileInfoNumber}>23 Dec 1991</p>
               <p className={style.profileInfoAboutME}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum, incidunt facilis laboriosam dignissimos sint fugiat quam ratione quod odit, consequatur dolorem blanditiis doloremque minus, consectetur numquam ducimus quaerat laborum!</p>
           </div>

        </div>
    )
}

export default ProfileInfo;