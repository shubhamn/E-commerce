import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyAwtGy8exziamlHvoJn9M8MYxPBdfJxc40",
    authDomain: "e-commerce-a2ce7.firebaseapp.com",
    projectId: "e-commerce-a2ce7",
    storageBucket: "e-commerce-a2ce7.appspot.com",
    messagingSenderId: "658054887610",
    appId: "1:658054887610:web:31cd966db36dff35702a83",
    measurementId: "G-5SG1QYHQ9Y"

})

const db=firebase.firestore();
const auth=firebase.auth();

export {auth};