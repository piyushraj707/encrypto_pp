import './App.css';
import React from 'react';
import Login from './components/login';
import PasswordManager from './components/PasswordManager'
import Register from './components/register';

function App() {
    const [screen, setScreen] =  React.useState('Login');

    function changeScreen (page) {
        setScreen(page);
    }

    if (localStorage.getItem("username")) {
        return <PasswordManager owner={localStorage.getItem("username")} />
    }
    else {
        return (screen==="Login"?<Login changeScreen={changeScreen} />:<Register changeScreen={changeScreen}></Register>)
    }
}

export default App;