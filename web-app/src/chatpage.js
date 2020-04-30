import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
// import Alert from '@material-ui/lab/Alert';
// import Collapse from '@material-ui/core/Collapse';

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
      <header className="App-header">
        <Link to='/'><img src={logo} className="App-logo" alt="logo"/></Link>
      </header>
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
                // value={"Sample message"}
                // onKeyPress={(evt) => this.onKeyPress(evt)}
                // onChange={(evt) => this.onMessageChange(evt)}
              />
            </div>
            {/* <div className="alerts">
              <Collapse in={this.state.showNameChangeFailed}>
                <Alert severity="error" onClose= {() => this.handleNameChangeFailedAlertClose()}>
                  Name Change Failed: {this.state.nameChangeFailedReason}
                </Alert>
              </Collapse>
              <Collapse in={this.state.showColorChangeFailed}>
                <Alert severity="error" onClose={() => this.handleColorChangeFailedAlertClose()}>
                  Color Change Failed: Command Format: /nickcolor RRGGBB
                </Alert>
              </Collapse>
              <Collapse in={this.state.invalidSlashCommand}>
                <Alert severity="error" onClose={() => this.handleInvalidSlashCommandAlertClose()}>
                  Invalid Slash Command
                </Alert>
              </Collapse>
            </div> */}
          </div>
        </div>
      </body>
    </div>
  );
}

export default Chatpage;
