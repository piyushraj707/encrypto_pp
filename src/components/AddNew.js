import React, {useState} from "react";
import axios from "axios";
import { mToC, cToM } from "./RSA";

function AddNew() {
    const [title, setTitle] = useState("")
    const [URL, setURL] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail]=useState("")

    function handleSubmission(event) {
        event.preventDefault();
        const newPass= {
            title: title,
            owner: localStorage.getItem("username"),
            URL: URL,
            password: mToC(password),
            username: username,
            email: email
        }
        axios.post("http://localhost:5000/passwords", newPass)
            .then (res=>{
                console.log("password added successfull.")
            })
            .catch(err=>{
                console.log("There was an error: ", err)
            })
        console.log("Here is the decrypted password: ", cToM(localStorage.getItem("c"), "abcd"))
    }

    return (
        <form onSubmit={handleSubmission}>
            <p>Website name:</p>
            <input
                onChange={(event)=>setTitle(event.target.value)}
                placeholder="Amazon">
            </input>

            <p>Username for the website</p>
            <input
                onChange={(event)=>setUsername(event.target.value)}
                placeholder="registered username">
            </input>

            <p>password for the website</p>
            <input
                onChange={(event)=>setPassword(event.target.value)}
                placeholder="&myPass*123">
            </input>

            <p>URL for the website</p>
            <input
                onChange={(event)=>setURL(event.target.value)}
                placeholder="www.amazon.in">
            </input>

            <p>Registered email-id</p>
            <input
                onChange={(event)=>setEmail(event.target.value)}
                placeholder="abc@gmail.com">
            </input>

            <button type="submit">Submit</button>
        </form>
    )
}

export default AddNew;