import React from 'react';
import {inputForm} from '../../../common/formsControl/inputForm';
import style from '../../../common/formsControl/inputForm.module.css';

import {reduxForm, Field} from 'redux-form';
import {requiredField} from '../../../../helpers/validators/validators'


let LoginForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text" placeholder={'login'} name={'login'} component={inputForm} validate={[requiredField]} />
        </div>
        <div>
            <Field type="password" placeholder={'password'} name={'password'} component={'input'} />
        </div>
        <div>
            <Field type="checkbox" component={'input'} name={'remeberMe'} /> <span>Rember Me</span>
        </div>
        {props.error && <div className={style.form_summary_error}>{props.error}</div>}
        
        <button>Login</button>
    </form>
)

export default reduxForm({
    form: 'login'
})(LoginForm);