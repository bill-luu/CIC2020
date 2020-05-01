import React, { useState, useEffect } from 'react';
import './App.css';
import './homepage.css'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase/app';
import 'firebase/auth'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

function EnterFacilityCodeComponent() {
  const [code, setCode] = useState("")
  const [redirect, setRedirect] = useState(false)

  const submitCode = () => {
    firebase.firestore().collection("facilities").doc(code).get().then((doc) => {
      if(doc.exists) {
        let user = firebase.auth().currentUser;
        let userDoc = firebase.firestore().collection("users").doc(user.uid)
        
        userDoc.update({
          facilityID: code
        }).then(() => {
          setRedirect(true)
        })
      } else {
        console.log("Facility doesn't exist")
      }
    })
  }

  if(redirect) {
    return (
      <Redirect to="/bulletin" />
    )
  }

  return (
    <div className="homepage-body">
        <div className="facility-container">
            <span>Enter Facility Code</span>
            <TextField
                value={code}
                onChange={(evt) => setCode(evt.target.value.trim())}/>
            <Button 
                className="homepage-button"
                onClick={() => submitCode()} 
                variant="outlined">Submit</Button>
        </div>
    </div>
  )
}

function Homepage() {
  const [redirect, setRedirect] = useState("/bulletin");
  const [loading, setLoading] = useState(true)
  const [showFacilityPrompt, setShowFacilityPrompt] = useState(false) 
  
  useEffect(() => {
        // Prevent states being set when component is unmounted (in return function)
        let mounted = true
        let unsuscribe = firebase.auth().onAuthStateChanged((user) => {
            if(mounted) {
                if (!user) {
                    setRedirect("/signin")
                    setShowFacilityPrompt(false)
                    setLoading(false)
                } else {
                    let userDoc = firebase.firestore().collection("users").doc(user.uid)
                    userDoc.get().then((doc) => {
                        if (!doc.exists || doc.data().facilityID === null) {
                            setShowFacilityPrompt(true)
                        } else {
                            setRedirect("/bulletin")
                        }
                        setLoading(false)
                    })
                }
            }
        })
    return () => {
        unsuscribe()
        mounted = false
    }
  })

  if(loading) {
    return (
      <div className="homepage-spinner">
            <CircularProgress />
      </div>
    )
  } else if(showFacilityPrompt) {
    return (<EnterFacilityCodeComponent/>)
  }

  return (
    <div>
      <Redirect to={redirect} />
    </div>
  )
}

export default Homepage;
