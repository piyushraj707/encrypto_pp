import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import PassContainer from "./passcontainer"
import axios from "axios";
import AddNew from "./AddNew";
import { cToM } from "./RSA";

function PasswordManager(props) {
    const [myData, setData]=useState([]);
    const [addNew, setAddNew]=useState(true);
    const [showPass, setShowPass]=useState(false);
    const [decryption, setDecryption]=useState("");

    useEffect(()=> {
        axios
            .post("http://localhost:5000/passwords/find", {owner: props.owner})
            .then((res) => setData(res.data));
    }, [])

    function submitDecrypter(event) {
        event.preventDefault();
        setShowPass(!showPass);
    }

    return (
        <>
            <Navbar owner={props.owner}/>
            <div>
                <div className="add-new">
                    <button onClick={()=>setAddNew(!addNew)} className="add-new-button">
                        Add new
                    </button>
                    { addNew || <AddNew/> }
                </div>

                <form onSubmit={submitDecrypter} className="decrypt-container">
                    <p>Enter your decryption key</p>
                    <input value={decryption} onChange={(event)=>setDecryption(event.target.value)} placeholder="mY@Decrypting_pass*&"></input>
                    <button type="submit">Decrypt</button>
                </form>

                <div className="expexp">
                    {myData.map((info)=>{
                        return (
                            <PassContainer
                                showPass={showPass}
                                title={info.title}
                                username={info.username}
                                password={showPass?cToM(info.password, decryption):"*******"}
                                URL={info.URL}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default PasswordManager;