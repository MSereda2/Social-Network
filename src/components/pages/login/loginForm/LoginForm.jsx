import React from 'react';

import {reduxForm, Field} from 'redux-form';


let LoginForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text" placeholder={'login'} name={'login'} component={'input'} />
        </div>
        <div>
            <Field type="text" placeholder={'password'} name={'password'} component={'input'} />
        </div>
        <div>
            <Field type="checkbox" component={'input'} name={'remeber me'} /> <span>Rember Me</span>
        </div>
        <button>Login</button>
    </form>
)

export default reduxForm({
    form: 'login'
})(LoginForm);