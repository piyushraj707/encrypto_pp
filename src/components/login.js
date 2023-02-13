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
                if (res.status===201) {
                    localStorage.setItem("username", username);
                    localStorage.setItem("n", res.data[0])
                    localStorage.setItem("e", res.data[1])
                }
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
        <>
        <Navbar />
        <div className="login-container">
            <div className="login-box">
                <form onSubmit={handleSubmission} method="post">
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
                    <button type="submit">Login</button>
                </form>
                    <button onClick={()=>props.changeScreen("Register")} className="switch-button">Don't have an account?</button>
            </div>
        </div>
        </>
    )
}

export default Login;