import React from "react";
import Navbar from "./navbar";
import RSA from "./RSA";

function Register2 (props) {
    const [dPass, setDPass] = React.useState("")

    function handleSubmission() {
        const [n, e] = RSA(dPass);
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