import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './homepage';
import Chatpage from './chatpage';
import SignInPage from './signinPage'
import Bulletinpage from './bulletinpage';
import Header from './header';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/signin' component={SignInPage}></Route>
        <Route exact path='/bulletin' component={Bulletinpage}></Route>
        <Route exact path='/chat' component={Chatpage}></Route>
      </Switch>
    </div>
  );
}

export default App;
