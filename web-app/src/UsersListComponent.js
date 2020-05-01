import React, { useState, useEffect } from 'react';
import './UsersListComponent.css';
import firebase from 'firebase/app';
import 'firebase/auth'

function User(props) {
    const [fontWeight, setFontWeight] =  useState("")
    const handleClick = () => {
        props.handleClick()
    }

    useEffect(() => {
        setFontWeight(props.currentlySelectedID === props.userID ? "bold" : "normal")
    }, [props.currentlySelectedID, props.userID]) 
    
    return (
        <div style={{paddingLeft: "10px"}}>
            <span
                onClick={handleClick}
                style={{fontWeight: fontWeight}}>
            {props.username}</span>
        </div>
    )
}

class UsersListComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            currentlySelectedID: 0,
        }
    }

    componentDidMount() {
        this.userUnsubscriber = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                this.userSnapshotUnsubscriber = firebase.firestore().collection("users").onSnapshot((querySnapshot) => {
                    var users = [];
                    querySnapshot.forEach((doc) => {
                        if(doc.id !== user.uid) {
                            users.push({
                                username: doc.data().displayName,
                                userID: doc.id
                            });
                            if(this.state.currentlySelectedID === 0) {
                                this.userInfo(doc.id, doc.data().displayName)
                            }
                        }
                    })
                    this.setState({users: users})
                })
            }
        });

    }

    componentWillUnmount() {
        this.userUnsubscriber();
        this.userSnapshotUnsubscriber();
    }

    userInfo(userID, username) {
        this.props.updateCurrentlySelectedUser(userID, username)
        this.setState({ currentlySelectedID: userID})
    }

    render() {
        return (
            <div className="usersListComponent">
                <span style={{paddingLeft: "5px"}}>Users</span>
                <div className="users users-order">
                    {this.state.users.map(user => {
                        return (
                            <User handleClick={() => this.userInfo(user.userID, user.username)}
                                key={user.userID}
                                username={user.username}
                                currentlySelectedID={this.state.currentlySelectedID}
                                userID={user.userID}></User>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default UsersListComponent;