import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import PassContainer from "./passcontainer"
import axios from "axios";

function PasswordManager(props) {
    const [myData, setData]=useState([]);

    useEffect(()=> {
        axios
            .post("http://localhost:5000/passwords/find", {owner: props.owner})
            .then((res) => setData(res.data));
    }, [])

    return (
        <div>
            <Navbar owner={props.owner}/>
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
    )
}

export default PasswordManager;