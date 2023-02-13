import React from "react";
import "./css/navbar.css"

function navBar() {
    return (
        <nav>
            <div>
                You are logged in as {localStorage.getItem("username")};
            </div>
            <button onClick={() => localStorage.clear()}>
                Logout
            </button>
        </nav>
    )
}

export default navBar;