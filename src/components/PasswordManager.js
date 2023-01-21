import React from "react";

function PasswordManager(props) {
    function helpdisplay() {
        props.displayUserName();
    }
    return (
        <div>
            This is the PasswordManager page.
            <button onClick={helpdisplay} type="submit">Press me to get your username printed</button>
        </div>
    )
}

export default PasswordManager;