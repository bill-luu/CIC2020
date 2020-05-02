import React, { useState, useEffect } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';

import MessagesComponent from './MessagesComponent'
import UsersListComponent from './UsersListComponent'
import firebase from 'firebase/app';
import 'firebase/auth'

function Chatpage() {

  const [currentlySelectedUser, setCurrentlySelectedUser] = useState({})

  const updateCurrentlySelectedUser = (userID, username) => {
    setCurrentlySelectedUser({
      userID: userID,
      username: username
    })
  }

  const [user, setUser] = useState({})
  useEffect(() => {
    let unsubscribeOnAuthStateChanged = firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser({
          username: currentUser.displayName,
          userID: currentUser.uid
        })
      }
    });
    return(() => {
      unsubscribeOnAuthStateChanged()
    })
  }, [])

  const [chatID, setChatID] = useState("")
  useEffect(() => {
    async function getChat() {
      if(user.userID && currentlySelectedUser.userID) {
        const chatsRef = firebase.firestore().collection("chats")

        let chatID;
        // querySnapshot contains all the chats with the logged in user
        const querySnapshot = await chatsRef.where(
          "users", "array-contains", user.userID).get()
        querySnapshot.forEach((doc) => {
            // check for any chats with the currently selected user
            if (doc.data().users.includes(currentlySelectedUser.userID)) {
              chatID = doc.id
            }
          });
        
        // Check if chat exists, if not, create one on firestore
        if (!chatID) {
          chatsRef.add({
            users: [user.userID, currentlySelectedUser.userID]
          }).then((docRef) => {
            chatID = docRef.id
          })
        }
        setChatID(chatID)
      }
    }
    getChat()
  }, [user, currentlySelectedUser])

  const [message, setMessage] = useState("")
  const onKeyPress = (evt) => {
    if (evt.key === "Enter") {
      let chatRef = firebase.firestore().collection("messages")
      chatRef.add({
        timestamp: + new Date(),
        userID: user.userID,
        chatID: chatID,
        content: message,
        username: user.username,
      }).then(() => {
        setMessage("")
      })
    }
  }

  return (
    <div className="App">
        <div className="container">
          <div className="chatbox">
            <MessagesComponent
            chatID={chatID}
            chatName={currentlySelectedUser.username}
            key={chatID}/>
            <UsersListComponent updateCurrentlySelectedUser={updateCurrentlySelectedUser}/>
            <div className="userInput">
              <TextField
                style={{width: "100%"}}
                label="Message"
                variant="outlined"
                value={message}
                onChange={(evt) => setMessage(evt.target.value)}
                onKeyPress={(evt) => onKeyPress(evt)}
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
    </div>
  );
}

export default Chatpage;
