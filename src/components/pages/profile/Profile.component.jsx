import React from 'react';
import style from './profile.module.css';
import PostContainer from './postContainer/PostContainer.component'
import ProfileBack from './profileBackground/profileBack.component';
import ProfileImg from './profileImage/ProfileImg.component';
import ProfileInfo from './profileInfo/profileInfo.component';

const Profile = (props) => {
    return(
        <main className={style.profile}>
            <ProfileBack />
            <ProfileImg />
            <ProfileInfo />
            <PostContainer
             PostData={props.store.getState().profilePage.PostData}
             inputValue={props.store.getState().profilePage.newTextInput}
             dispatch={props.store.dispatch}  />
        </main>
    )
}

export default Profile;