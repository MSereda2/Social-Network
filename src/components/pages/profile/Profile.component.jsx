import React from 'react';
import style from './profile.module.css';
import PostContainer from './postContainer/PostContainer.component'
import ProfileBack from './profileBackground/profileBack.component';
import ProfileImg from './profileImage/ProfileImg.component';
import ProfileInfo from './profileInfo/profileInfo.component';

const Profile = (props) => {
    debugger;
    return(
        <main className={style.profile}>
            <ProfileBack />
            <ProfileImg />
            <ProfileInfo />
            <PostContainer inputValue={props.state.newTextInput} PostData={props.state.PostData} dispatch={props.dispatch} />
        </main>
    )
}

export default Profile;