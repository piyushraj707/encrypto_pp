import './App.css';
import React from 'react';
import {Switch, Route, Link} from "react-router-dom";
import Login from './components/login';
import PasswordManager from './components/PasswordManager'

function App() {
  const [username, setusername] = React.useState(null);
  if (username) {
    return <PasswordManager />
  }
  else {
    return <Login />
  }
}

export default App;