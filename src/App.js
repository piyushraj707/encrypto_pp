import './App.css';
import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Login from './components/login';
import PasswordManager from './components/PasswordManager'

function App() {
    const [owner, setOwner] = React.useState("piyushraj707");

    function handleSubmission(val) {
        setOwner(val);
    }

    if (owner) {
        return <PasswordManager owner={owner} />
    }
    else {
        return <Login onSubmission={handleSubmission} />
    }
}

export default App;