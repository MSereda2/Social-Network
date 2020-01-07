import React from 'react';
import style from './ProfileImg.module.css';

const ProfileImg = () => {
    return(
        <div className={style.profile__image_box}>
            <img className={style.profile__image} src="https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg" />
        </div>
    )
}

export default ProfileImg;