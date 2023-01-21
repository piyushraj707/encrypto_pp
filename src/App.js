import './App.css';
import React from 'react';
import {Switch, Route, Link} from "react-router-dom";
import Login from './components/login';
import PasswordManager from './components/PasswordManager'

function App() {
  const [userName, setUserName] = React.useState(null);

  function handleSubmission(val) {
    setUserName(val);
  }

  function displayUserName() {
    console.log(userName);
  }

  if (userName) {
    return <PasswordManager displayUserName={displayUserName} />
  }
  else {
    return <Login onSubmission={handleSubmission}/>
  }
}

export default App;