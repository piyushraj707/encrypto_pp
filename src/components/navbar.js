import React from "react";
import "./css/navbar.css"

function navBar(props) {
    return (
        <nav>
            You are logged in as {props.owner};
        </nav>
    )
}

export default navBar;