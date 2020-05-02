import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import firebase from 'firebase/app';
import Button from '@material-ui/core/Button';

const Header = () => {

    const signOut = () => {
        firebase.auth().signOut()
        setIsSignedIn(false)
    }

    const [isSignedIn, setIsSignedIn] = useState(false)
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            setIsSignedIn(true)
            // User is signed in.
        } else {
            setIsSignedIn(false)
        }
    });

    return (
        <div className="App-header">
            <Link to='/' className="link">
                    SafeDistance
            </Link>
            {isSignedIn && <div> 
                <Link
                    to='/chat'>
                    <Button variant="contained"
                        color="primary">
                        Messages
                    </Button>
                </Link>
                <Link to='/'
                    className="App-header-button">
                    <Button variant="contained"
                        onClick={() => signOut()}
                        color="secondary">
                        Sign Out
                    </Button>
                </Link>
            </div>}
        </div>
    )
}

export default Header