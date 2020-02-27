import React from 'react';
import style from './profileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateProfileStatus(this.state.status)

    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })   
    }

    render() {
        return(
            <>
                <div className={style.StatusContainer}>
                    {!this.state.editMode &&
                     <span
                      className={style.status}
                      onDoubleClick={this.activeEditMode}>
                          {this.state.status || 'no status'}
                    </span> }
                </div>
                <form action="#" className={style.StatusContainer}>
                    {this.state.editMode && 
                    <input
                        value={this.state.status}
                        onChange={this.onStatusChange}
                        autoFocus={true} 
                        onBlur={this.canselEditMode} 
                        className={style.profileStatus}/> }
                </form>
            </>
        )
    }
   
}

export default ProfileStatus;