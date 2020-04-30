import React, { useContext } from 'react';
import firebase from 'firebase';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';



const AuthComponent = () => {
    // Configure FirebaseUI.
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        signInSuccessUrl: '/bulletin',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ]
    };
    
    return (
        <div>
            Auth!
             <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    )
}

export default AuthComponent