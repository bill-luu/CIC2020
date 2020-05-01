import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';

import MessagesComponent from './MessagesComponent'
import UsersListComponent from './UsersListComponent'

function Chatpage() {
  let textProps = {
    style: {
      color: 'white'
    }
  }

  return (
    <div className="App">
      <body>
        <div className="container">
          <div className="chatbox">
            <MessagesComponent username={"someguy"} clientID={"123"}/>
            <UsersListComponent/>
            <div className="userInput">
              <TextField
                style={{width: "100%"}}
                label="Message"
                variant="outlined"
                InputLabelProps={{
                  style: {
                    color: 'white'
                  }
                }}
                InputProps={{
                  style: {
                    color: 'white'
                  }
                }}
              />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Chatpage;
