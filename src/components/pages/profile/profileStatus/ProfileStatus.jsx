import React, {useState, useEffect} from 'react';
import style from './profileStatus.module.css';

let ProfileStatus = (props) => {

    // state = {
    //     editMode: false,
    //     // status: this.props.status
    //     }

    // activeEditMode = () => {
    //     this.setState({
    //         editMode: true
    //     })
    // }

    // canselEditMode = () => {
    //     this.setState({
    //         editMode: false
    //     })
    //     this.props.updateProfileStatus(this.state.status)

    // }

    // onStatusChange = (e) => {
    //     this.setState({
    //         status: e.currentTarget.value
    //     })   
    // }

    // componentDidUpdate = (prevProps, prevState) => {
    //     if(prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    let [editMode, setEditMode] = useState(false);

    let activeEditMode = () => {
        setEditMode(true)
    }

    let canselEditMode = () => {
        setEditMode(false)
    }

    return(
        <>
            <div className={style.StatusContainer}>
                {!editMode &&
                    <span
                      className={style.status}
                      onDoubleClick={activeEditMode}>
                          {props.status || 'no status'}
                    </span> }
            </div>
            <form action="#" className={style.StatusContainer}>
                {editMode && 
                    <input
                        value={props.status}
                        // onChange={onStatusChange}
                        autoFocus={true} 
                        onBlur={canselEditMode} 
                        className={style.profileStatus}/> }
            </form>
        </>
    )   
}

export default ProfileStatus;