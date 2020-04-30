import React from 'react';
import './UsersListComponent.css';

function User(props) {
    return (
        <div style={{paddingLeft: "10px"}}>
            <span>{props.user}</span>
        </div>
    )
}

class UsersListComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: ['user1', 'medical_staff', 'someguy', 'johnsmith']
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="usersListComponent">
                <span style={{paddingLeft: "5px"}}>Users</span>
                <div className="users users-order">
                    {/* {this.state.users.map(user => {
                        return (
                            <User key={user.clientID} user={user}></User>
                        )
                    })} */}
                    <User key={0} user={this.state.users[0]}></User>
                    <User key={1} user={this.state.users[1]}></User>
                    <User key={2} user={this.state.users[2]}></User>
                    <User key={3} user={this.state.users[3]}></User>
                </div>
            </div>
        )
    }
}

export default UsersListComponent;