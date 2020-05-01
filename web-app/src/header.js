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
            <div>
                <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
                {isSignedIn && <Link to='/chat'>Messages</Link>}
            </div>

            {
                isSignedIn && 
                <Link to='/'>
                    <Button variant="contained"
                        className="App-header-button"
                        onClick={() => signOut()}
                        color="secondary">
                        Sign Out
                    </Button>
                </Link>
            }
        </div>
    )
}

export default Header