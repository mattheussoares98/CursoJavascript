import firebase from 'firebase/app';
import 'firebase/database';
import "firebase/firestore"


if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyA9S0lAca77Im7rt34St7GG8r7G9-wUj7w",
        authDomain: "nextjs-crud-f1ecd.firebaseapp.com",
        projectId: "nextjs-crud-f1ecd",
    })
}

export default firebase