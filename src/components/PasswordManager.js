import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import PassContainer from "./passcontainer"
import axios from "axios";
import AddNew from "./AddNew";

function PasswordManager(props) {
    const [myData, setData]=useState([]);
    const [addNew, setAddNew]=useState(true);

    useEffect(()=> {
        axios
            .post("http://localhost:5000/passwords/find", {owner: props.owner})
            .then((res) => setData(res.data));
    }, [])

    return (
        <>
            <Navbar owner={props.owner}/>
            <div>
                <div className="add-new">
                    <button onClick={()=>setAddNew(!addNew)} className="add-new-button">
                        Add new
                    </button>
                    { addNew || <AddNew /> }
                </div>
                <div className="decrypt-container">
                    <p>Enter your decryption key</p>
                    <input placeholder="mY@Decrypting_pass*&"></input>
                    <button type="submit">Decrypt</button>
                </div>
                <div className="expexp">
                    {myData.map((info)=>{
                        return (
                            <PassContainer
                                title={info.title}
                                username={info.username}
                                password={info.password}
                                url={info.URL}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default PasswordManager;