import React from "react";
import Navbar from "./navbar"
import axios from "axios";
import Register2 from "./register2";

function Register(props) {
    const [fName, setFName]=React.useState("");
    const [lName, setLName]=React.useState("");
    const [username, setUsername]=React.useState("");
    const [password, setPass]=React.useState("");
    const [confPass, setConfPass]=React.useState("");
    const [isDone, setIsDone]=React.useState(0);
    
    function updateFName(event) {
        setFName(event.target.value)
    }
    function updateLName(event) {
        setLName(event.target.value)
    }
    function updateUsername(event) {
        setUsername(event.target.value);
    }
    function updatePassword(event) {
        setPass(event.target.value);
    }
    function confirmPassword(event) {
        setConfPass(event.target.value)
    }

    function handleSubmission(event) {
        event.preventDefault();
        
        if (!fName || !lName || !username || !password || !confPass) {
            alert("Please fill the form fully")
        }
        else if (confPass === password) {
            axios.get("http://localhost:5000/register", {username: username})
                .then(res=> {
                    console.log(res)
                    if (res.status===200) {
                        alert("Everything's good.")
                        setIsDone(1)
                    }
                    else {
                        setUsername("");
                        alert("Username is taken. Try again")
                    }
                })
                .catch(err=> console.log(err));
        }
        else {
            setPass("");
            setConfPass("");
            alert("Password didn't match. Try again");
        }
    }

    return (!isDone?
        <>
        <Navbar />
        <div className="login-container">
            <div className="login-box">
                <form onSubmit={handleSubmission} method="post">
                    <p>Enter your first name</p>
                    <input 
                        onChange={updateFName}
                        value={fName}
                        type="text"
                        className="input-area"
                        placeholder="John">
                    </input>

                    <p>Enter your last name</p>
                    <input 
                        onChange={updateLName}
                        value={lName}
                        type="text"
                        className="input-area"
                        placeholder="Cena">
                    </input>

                    <p>Create username</p>
                    <input 
                        onChange={updateUsername}
                        value={username}
                        type="text"
                        className="input-area"
                        placeholder="johncena@123">
                    </input>

                    <p>Create password</p>
                    <input
                        onChange={updatePassword}
                        value={password}
                        type="text"
                        className="input-area"
                        placeholder="cena123john">
                    </input>

                    <p>Confirm password</p>
                    <input
                        onChange={confirmPassword}
                        value={confPass}
                        type="password"
                        className="input-area"
                        placeholder="cena123john">
                    </input>
                    <button type="submit">Register</button>
                </form>
                    <button onClick={()=>props.changeScreen("Login")} className="switch-button">Already have an account?</button>
            </div>
        </div>
        </>
        :
        <>
            <Register2
                fName={fName}
                lName={lName}
                username={username}
                password={password}
                setIsDone={setIsDone}
            />
        </>
    )
}

export default Register;