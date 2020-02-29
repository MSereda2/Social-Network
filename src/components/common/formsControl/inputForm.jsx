import React from 'react';
import style from './inputForm.module.css'

export const inputForm = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return(
        <>
        {hasError && <span className={style.spanError}>{meta.error}</span>}

        <input className={`${hasError && style.error }`} {...input} {...props} />
        </>
    )
    
}