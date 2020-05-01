import React from 'react';
import './MessagesComponent.css';
import moment from 'moment';
import firebase from 'firebase/app';
import CircularProgress from '@material-ui/core/CircularProgress';

function Message(props) {

    let messageStyle = {
        'fontWeight': 'normal'
    }

    if (props.clientID === props.userID) {
        messageStyle = {
            'fontWeight': 'bold'
        }
    }
    return(
        <div style={{paddingLeft: "10px"}}>
            <span>
                {props.timestamp + " "}
                <span style={messageStyle}>
                    <span>
                        {props.username}:
                    </span> {props.message}
                </span>
            </span>
        </div>
    )
}

class MessagesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            isLoading: true
        }
        this.messagesEndRef = React.createRef();
    }

    componentDidMount() {
        if(this.props.chatID) {
            let chatRef = firebase.firestore().collection("messages").where("chatID", "==", this.props.chatID)
                // .orderBy("timestamp")
            this.unsubscribe = chatRef.onSnapshot((querySnapshot) => {
                let messages = [];
                querySnapshot.forEach((doc) => {
                    messages.push({
                        timestamp: doc.data().timestamp,
                        username: doc.data().username,
                        message: doc.data().content,
                        userID: doc.data().userID,
                    })
                })

                messages.sort((a, b) => {
                    if(a.timestamp < b.timestamp) return -1
                    if(a.timestamp > b.timestamp) return 1
                    return 0
                })
                this.setState({ messages: messages, isLoading: false}, ()=> {this.scrollToBottom()})
            })
        }
    }

    componentWillUnmount() {
        if(this.unsubscribe) {
            this.unsubscribe()
        }
    }

    scrollToBottom = () => {
        if(!this.state.isLoading) {
            this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    render() {
        if(this.state.isLoading) {
            return (
                <div className="messagesComponent">
                    <div style={{paddingLeft: "5px"}}>{this.props.chatName}</div>
                    <div className="loading">
                        <div className="progress">
                        <CircularProgress />
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="messagesComponent">
                <span style={{paddingLeft: "5px"}}>{this.props.chatName}</span>
                <div className="messages overflow">
                    <div className="overflow">
                        {this.state.messages.map((message, index) => {
                            const displaytime = moment(message.timestamp).format("h:mm A")
                            return (
                                <div key={index} >
                                    <Message
                                        timestamp={displaytime}
                                            username={message.username}
                                            message={message.message}
                                            userID={message.userID}
                                            clientID={this.props.clientID}/>
                                </div>
                            )
                        })}
                        <div ref={this.messagesEndRef}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MessagesComponent;