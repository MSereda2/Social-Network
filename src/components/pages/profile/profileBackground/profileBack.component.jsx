import React from 'react';
import style from './profileBack.module.css';


class ProfileBack extends React.Component {



    render() {
        return(
            <div className={style.profile__background}>
                <img className={style.profile__background_img}/>
            </div>
        )
    }
}

export default ProfileBack;