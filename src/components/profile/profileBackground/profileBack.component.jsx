import React from 'react';
import style from './profileBack.module.css';


const ProfileBack = () => {
    return(
        <div className={style.profile__background}>
            <img className={style.profile__background_img} src="https://images.unsplash.com/photo-1572851899530-b1454455af01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
        </div>
    )
}

export default ProfileBack;