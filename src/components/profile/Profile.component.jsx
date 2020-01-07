import React from 'react';
import style from './profile.module.css';
import PostWraper from './postWraper/PostWraper.component';
import ProfileBack from './profileBackground/profileBack.component';
import ProfileImg from './profileImage/ProfileImg.component';


const Profile = () => {
    return(
        <main className={style.profile}>
            <ProfileBack />
            <ProfileImg />
            <PostWraper />
        </main>
    )
}

export default Profile;