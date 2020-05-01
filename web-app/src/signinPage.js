import React from 'react';
import './App.css';
import AuthComponent from './authComponent';

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
