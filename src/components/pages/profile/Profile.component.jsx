import React from 'react';
import style from './profile.module.css';
import PostContainer from './postContainer/PostContainer.component'
import ProfileBack from './profileBackground/profileBack.component';
import ProfileImg from './profileImage/ProfileImg.component';
import ProfileInfo from './profileInfo/profileInfo.component';

import {connect} from 'react-redux';

import {addPostActionCreate,onChangeInputActionCreate} from '../../../redux/reducers/profile_reducer';


const Profile = (props) => {
    return(
        <main className={style.profile}>
            <ProfileBack />
            <ProfileImg />
            <ProfileInfo />
            <PostContainer
             PostData={props.postData}
             inputValue={props.inputValue}
             addPost={props.addPost}
             changeInput={props.changeInput}  />
        </main>
    )
}

let mapStateToProps = (state) => ({
    postData: state.profilePage.PostData,
    inputValue: state.profilePage.newTextInput,
})

let mapDispatchToProps = (dispatch) => ({
    addPost: () => dispatch(addPostActionCreate()),
    changeInput: (text) => dispatch(onChangeInputActionCreate(text)),

})

export default connect(mapStateToProps,mapDispatchToProps)(Profile);