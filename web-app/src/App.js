import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './homepage';
import Chatpage from './chatpage';
import Bulletinpage from './bulletinpage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route exact path='/bulletin' component={Bulletinpage}></Route>
      <Route exact path='/chat' component={Chatpage}></Route>
    </Switch>
  );
}

export default App;
