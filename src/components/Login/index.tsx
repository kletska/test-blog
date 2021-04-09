import React from 'react';
import './style.css';

const Login = (props) => {
    return (
        <div className="element-container">
            <form className="login-form">
                <div className="subelement">
                    name:
                    <input className="form-input"/>
                </div>
                <div className="subelement">
                    password:
                    <input className="form-input"/>
                </div>
                <button className="submit-button"><b>login</b></button>
            </form>
        </div>
    );
}

export default Login;