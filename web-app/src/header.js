import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import firebase from 'firebase/app';

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
            <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
            
            {
                isSignedIn && 
                <Link to='/'>
                    <button onClick={() => signOut()}>
                        Sign Out
                    </button>
                </Link>
            }
        </div>
    )
}

export default Header