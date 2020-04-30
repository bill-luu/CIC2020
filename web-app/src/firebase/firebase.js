import app from 'firebase/app';
import 'firebase/firestore';
import { firebaseApiKey } from './api.js';

const config = {
    projectId: 'coronabulletin-486ed',
    apiKey: firebaseApiKey,
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.firestore();
    }

    Messages = () => this.db.collection("messages");
}

export default Firebase;