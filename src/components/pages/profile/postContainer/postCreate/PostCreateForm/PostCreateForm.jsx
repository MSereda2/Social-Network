import React from 'react';
import style from './postCreateForm.module.css';

import {reduxForm, Field} from 'redux-form';

import {inputForm} from '../../../../../common/formsControl/inputForm';

import {requiredField, maxLengthCreator} from '../../../../../../helpers/validators/validators'

let maxLength10 = maxLengthCreator(10);

let PostCreateForm = (props) => (

    <form onSubmit={props.handleSubmit} className={`${style.form__group}`}>

        <Field validate={[requiredField,maxLength10]} component={inputForm} className={style.form__field} placeholder="Name" name={"addPost"} />

        <label for="name" className={style.form__label}>Name</label>
    </form>
)

export default reduxForm({
    form: 'addPost'
}) (PostCreateForm);