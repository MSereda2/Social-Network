import React from 'react';
import style from './profileStatus.module.css';

class ProfileInfo extends React.Component {

    state = {
        editMode: false,
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    canselEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return(
            <>
                <div className={style.StatusContainer}>
                    {!this.state.editMode && <span className={style.status} onDoubleClick={this.activeEditMode}>{this.props.status}</span> }
                </div>
                <form action="#" className={style.StatusContainer}>
                    {this.state.editMode &&  <input autoFocus={true} onBlur={this.canselEditMode} className={style.profileStatus} type="text" value={this.props.status}/> }
                </form>
            </>
        )
    }
   
}

export default ProfileInfo;