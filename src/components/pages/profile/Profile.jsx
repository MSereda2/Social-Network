import React from 'react';

import style from './profile.module.css';


// Components
import PostContainer from './postContainer/PostContainer.component'
import ProfileBack from './profileBackground/profileBack.component';
import ProfileImg from './profileImage/ProfileImg.component';
import ProfileInfo from './profileInfo/profileInfo.component';
import Preloder from '../../common/preloder/Preloder';

let Profile = (props) => {
    if(!props.profileUsers) {
        return <Preloder />
    }

    return(
        <main className={style.profile}>
            <ProfileBack />
            <ProfileImg profileImg={props.profileUsers.photos.small} profileName={props.profileUsers.fullName} />
            <ProfileInfo aboutMe={props.profileUsers.aboutMe} lookingForAJob={props.profileUsers.lookingForAJob} contacts={props.profileUsers.contacts} />
            <PostContainer
                PostData={props.PostData}
                inputValue={props.inputValue}
                addPost={props.addPost}
                changeInput={props.changeInput}  />
        </main>
    )
   
}

export default Profile;