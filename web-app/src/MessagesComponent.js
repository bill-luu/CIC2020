import React from 'react';
import './MessagesComponent.css';

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
                    <span style={{color: props.color}}>
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
            messages: []
        }
        this.messagesEndRef = React.createRef();
    }

    componentDidMount() {
    }

    scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }

    render() {
        return (
            <div className="messagesComponent">
                <span style={{paddingLeft: "5px"}}>Welcome, {this.props.username}!</span>
                <div className="messages overflow">
                    <div className="overflow">
                        {/* {this.state.messages.map((message, index) => {
                            return (
                                <div key={index} >
                                    <Message
                                            timestamp={message.timestamp}
                                            username={message.username}
                                            color={message.color}
                                            message={message.message}
                                            userID={message.userID}
                                            clientID={this.props.clientID}/>
                                </div>
                            )
                        })} */}
                        <div key={0} >
                            <Message
                                timestamp={"10:24"}
                                username={"johnsmith"}
                                color={"red"}
                                message={"How y'all doing today?"}
                                userID={3}
                                clientID={2}/>
                        </div>
                        <div key={0} >
                            <Message
                                timestamp={"10:26"}
                                username={"someguy"}
                                color={"green"}
                                message={"Great thanks!"}
                                userID={3}
                                clientID={2}/>
                        </div>
                        <div ref={this.messagesEndRef}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MessagesComponent;