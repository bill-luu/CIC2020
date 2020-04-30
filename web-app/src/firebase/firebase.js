import app from 'firebase/app';
import 'firebase/firestore';
import { firebaseApiKey } from './api.js';

const config = {
    projectId: 'coronabulletin-486ed',
    apiKey: firebaseApiKey,
    authDomain: "coronabulletin-486ed.firebaseapp.com",
    databaseURL: "https://coronabulletin-486ed.firebaseio.com",
    storageBucket: "coronabulletin-486ed.appspot.com",
    messagingSenderId: "455536007872",
    appId: "1:455536007872:web:ca617418a85bbbff02ab25",
    measurementId: "G-DZ9D3R0XGP"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.firestore();
    }

    Messages = () => this.db.collection("messages");
}

export default Firebase;