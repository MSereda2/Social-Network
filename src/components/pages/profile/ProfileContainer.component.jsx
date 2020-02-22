// Packages
import React from 'react';
import {connect} from 'react-redux';

// Style
import style from './profile.module.css';

// Components
import PostContainer from './postContainer/PostContainer.component'
import ProfileBack from './profileBackground/profileBack.component';
import ProfileImg from './profileImage/ProfileImg.component';
import ProfileInfo from './profileInfo/profileInfo.component';

// Actions
import {addPost,changeInput} from '../../../redux/reducers/profile/profile_actions' ;


class ProfileContainer extends React.Component {


    render() {
        return(
            <main className={style.profile}>
                <ProfileBack />
                <ProfileImg />
                <ProfileInfo />
                <PostContainer
                 PostData={this.props.PostData}
                 inputValue={this.props.inputValue}
                 addPost={this.props.addPost}
                 changeInput={this.props.changeInput}  />
            </main>
        )
    } 
}

let mapStateToProps = (state) => ({
    PostData: state.profilePage.PostData,
    inputValue: state.profilePage.newTextInput,
})


export default connect(mapStateToProps,{
    addPost,
    changeInput,
})(ProfileContainer);