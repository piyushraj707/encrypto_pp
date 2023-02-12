import React, {useState} from "react";

function AddNew(event) {
    const [websitename, setWebsitename] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [url, setURL] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Website name:</p>
            <input
                onChange={(event)=>setWebsitename(event.target.value)}
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

            <button type="submit">Submit</button>
        </form>
    )
}

export default AddNew;