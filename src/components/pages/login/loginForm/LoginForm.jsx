import React from 'react';

let LoginForm = (props) => (
    <form action="">
        <div>
            <input type="text" placeholder={'login'}/>
        </div>
        <div>
            <input type="text" placeholder={'password'}/>
        </div>
        <div>
            <input type="checkbox"/> <span>Rember Me</span>
        </div>
        <button>Login</button>
    </form>
)

export default LoginForm;