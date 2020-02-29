import React from 'react';
import style from './sendMessageForm.module.css';

import {reduxForm, Field} from 'redux-form';
import {requiredField, maxLengthCreator} from '../../../../helpers/validators/validators';

import {inputForm} from '../../../common/formsControl/inputForm'

let maxLength10 = maxLengthCreator(10);
let sendMessageForm = (props) => (
    <form className={style.dialogs__bottom} onSubmit={props.handleSubmit}>

        <Field
          className={style.input}
          validate={[requiredField,maxLength10]}
          name={"sendMessage"}
          component={inputForm}
          placeholder="what's on your mind?"
          type="text" />

        <button><i className="fa fa-send"></i></button>
    </form>
)

export default reduxForm({
    form: 'sendMessage'
})(sendMessageForm);