import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'><img src={logo} className="App-logo" alt="logo"/></Link>
        <p>
          HOMEPAGE
        </p>
      </header>
    </div>
  );
}

export default Homepage;
