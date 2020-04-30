import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthComponent from './authComponent';
import { Link } from 'react-router-dom';

function SignInPage() {
  return (
    <div className="App">
      <div className="container">
        <AuthComponent />
      </div>
    </div>
  );
}

export default SignInPage;
