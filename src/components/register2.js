import axios from "axios";
import React from "react";
import Navbar from "./navbar";
import RSA from "./RSA";

function Register2 (props) {
    const [dPass, setDPass] = React.useState("")
    function handleSubmission(event) {
        event.preventDefault();
        const [n, e] = RSA(dPass);
        const newUser = {
            _id: props.username,
            fName: props.fName,
            lName: props.lName,
            password: props.password,
            publicKey: [n, e]
        }
        console.log("Here is the data to be sent to the backend: ", newUser)
        axios.post("http://localhost:5000/register", newUser)
            .then (res => {
                console.log("successfully posted from regsiter2.js")
                console.log("Here is the result: ", res)
            })
            .catch(err => {
                console.log("There was an error: ", err)
            });
        console.log("wow")
    }
    function updateDPass (event) {
        setDPass(event.target.value)
    }
    return (
        <>
        <Navbar />
        <div className="login-container">
            <div className="login-box">
                <form onSubmit={handleSubmission} method="post">
                    <p>Enter your Decrypting password</p>
                    <input 
                        onChange={updateDPass}
                        value={dPass}
                        type="text"
                        className="input-area"
                        placeholder="mY@Decrypting_pass*&">
                    </input>
                    <button type="submit">Register</button>
                </form>
                    <button onClick={()=>props.setIsDone(0)} className="switch-button">Go Back</button>
            </div>
        </div>
        </>
    )
}

export default Register2;