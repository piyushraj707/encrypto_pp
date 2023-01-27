import React from "react";
import "./css/login.css"
import axios from "axios";
import Navbar from "./navbar";

function Login(props) {
    const [password, setPass]=React.useState("");
    const [username, setUsername]=React.useState("");

    function handleSubmission(event) {
        event.preventDefault();
        
        axios.post("http://localhost:5000/login", {username: username, password: password})
            .then(res=> {
                if (res.status===201) props.onSubmission(username);
                else {
                    setPass("");
                    setUsername("");
                    alert("Please re-try")
                }
            })
            .catch(err=> console.log(err));
    }
    function updateUsername(event) {
        setUsername(event.target.value);
    }
    function updatePassword(event) {
        setPass(event.target.value);
    }

    return (
        <div className="login-container">
            <Navbar />
            <form onSubmit={handleSubmission} method="post" className="login-box">
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
                    value={password}
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