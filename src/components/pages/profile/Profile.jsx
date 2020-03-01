import React from 'react';

import style from './profile.module.css';


// Components
import PostContainer from './postContainer/PostContainer.component'
import ProfileBack from './profileBackground/profileBack.component';
import ProfileImg from './profileImage/ProfileImg.component';
import ProfileInfo from './profileInfo/ProfileInfo.component';
import Preloder from '../../common/preloder/Preloder';

let Profile = (props) => {
    if(!props.profileUsers) {
        return <Preloder />
    }

    return(
        <main className={style.profile}>
            <ProfileBack />
            <ProfileImg
                profileImg={props.profileUsers.photos.small}
                profileName={props.profileUsers.fullName} />
            <ProfileInfo
                updateProfileStatus={props.updateProfileStatus}
                profileStatus={props.profileStatus}
                aboutMe={props.profileUsers.aboutMe}
                lookingForAJob={props.profileUsers.lookingForAJob}
                contacts={props.profileUsers.contacts} />
            <PostContainer
                PostData={props.PostData}
                addPost={props.addPost}
                profileName={props.profileUsers.fullName}
                profileImg={props.profileUsers.photos.small}  />
        </main>
    )
   
}

export default Profile;