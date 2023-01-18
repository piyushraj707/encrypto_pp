import React from "react";
import "./css/login.css"

function Login() {
    return (
        <div className="login-container">
            <form className="login-box">
                <p>Enter you username</p>
                <input type="text" className="input-text" placeholder="username"></input>

                <p>Enter you password</p>
                <input type="password" className="input-text" placeholder="password"></input>

                <input className="submit" type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Login;