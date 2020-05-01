import React, {useState} from 'react';
import firebase from 'firebase/app';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';

import { Redirect } from 'react-router-dom'

const AuthComponent = () => {
    const [redirect, setRedirect] = useState(false)
    const addUserAndRedirect = async (authResult) => {
            // Add user to database
            console.log("adding to db")
            await firebase.firestore().collection("users").doc(authResult.user.uid).set({
                displayName: authResult.user.displayName,
                facilityID: null
            })
            setRedirect(true)
            console.log("added to db")
    }

    // Configure FirebaseUI.
    const uiConfig = {
        signInFlow: 'redirect',
        signInSuccessUrl: '/',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        callbacks : {
            signInSuccessWithAuthResult: function(authResult) {
                if (authResult.additionalUserInfo.isNewUser) {
                    addUserAndRedirect(authResult)
                    return false
                } else {
                    return true
                }
            }
        },
    };

    if(redirect) {
        return (
            <Redirect to="/"/>
        )
    }
    return (
        <div>
             <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    )
}

export default AuthComponent