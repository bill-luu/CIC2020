import React from 'react';
import './App.css';
import AuthComponent from './authComponent';

import Typography from '@material-ui/core/Typography';
function SignInPage() {
  return (
    <div className="App">
      <div className="container signinContainer">
        <Typography variant="h1" align="center">
          SafeDistance
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph>
          The Socially Distant Social Network
        </Typography>
        <AuthComponent />
      </div>
    </div>
  );
}

export default SignInPage;
