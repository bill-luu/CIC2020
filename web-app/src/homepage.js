import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthComponent from './authComponent';
import { Link } from 'react-router-dom';
import { useCollection } from 'react-firebase-hooks/firestore';
import { FirebaseContext } from './firebase';

const TestComponent= () => {
  const firebase = useContext(FirebaseContext)
  const [value, loading, error] = useCollection(
      firebase.Messages(),
    );
  const testPost = () => {
   firebase.Messages().add({test: "test"})
  }

  return (
    <div>
      Hello
      <button onClick={testPost}>test</button>
      {value && ( value.docs.map(doc => (
        <span>
          {doc.data().test}
        </span>
      )))}
      <AuthComponent/>
    </div>
  )
}

function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'><img src={logo} className="App-logo" alt="logo"/></Link>
        <p>
          HOMEPAGE
        </p>
      <TestComponent/>
      </header>
    </div>
  );
}

export default Homepage;
