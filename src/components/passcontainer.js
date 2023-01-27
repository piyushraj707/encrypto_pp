import React from "react";
import "./css/passcontainer.css"

function PassContainer(props) {
    return (
        <div className="passcontainer">
            <div className="passname">
                {props.title}
            </div>
            <div className="passvalue">
                <div>Your username is <span className="passvalue-items">{props.username}</span></div>
                <div>Your password is <span className="passvalue-items">{props.password}</span></div>
                <div>URL for the website: <span className="passvalue-items">{props.url}</span></div>
            </div>
        </div>
    )
}

export default PassContainer