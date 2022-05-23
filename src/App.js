import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavigationBar from './components/navigation/NavigationBar';
import { Outlet } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <NavigationBar loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
      <Outlet />
    </div>
  );
}

export default App;
