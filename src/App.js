import './App.css';
import React from 'react';
import Login from './components/login';
import PasswordManager from './components/PasswordManager'
import Register from './components/register';

function App() {
    const [owner, setOwner] = React.useState();
    const [screen, setScreen] =  React.useState('Login');

    function handleSubmission(val) {
        setOwner(val);
    }

    function changeScreen (page) {
        setScreen(page);
    }

    if (owner) {
        return <PasswordManager owner={owner} />
    }
    else {
        return (screen==="Login"?<Login changeScreen={changeScreen} onSubmission={handleSubmission} />:<Register changeScreen={changeScreen}></Register>)
    }
}

export default App;