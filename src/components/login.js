import React from "react";
import "./css/login.css"
import axios from "axios";

function Login(props) {
    const [pass, setPass]=React.useState("");
    const [username, setUsername]=React.useState("");

    function handleSubmission(event) {
        event.preventDefault();
        axios.post("http://localhost:5000/login/", {_id: username, password: pass})
            .then(res=>console.log("Here is the data for logging in: ", res.data));
        props.onSubmission(username);
    }
    function updateUsername(event) {
        console.log(username)
        setUsername(event.target.value);
    }
    function updatePassword(event) {
        console.log(pass)
        setPass(event.target.value);
    }

    return (
        <div onSubmit={handleSubmission} className="login-container">
            <form method="post" className="login-box">

                <p>Enter your username</p>
                <input 
                    onChange={updateUsername}
                    value={username}
                    type="text"
                    className="input-area"
                    placeholder="username">
                </input>

                <p>Enter your password</p>
                <input
                    onChange={updatePassword}
                    value={pass}
                    type="password"
                    className="input-area"
                    placeholder="password">
                </input>

                <button type="submit">Create account / Login</button>
            </form>
        </div>
    )
}

export default Login;