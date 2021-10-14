import firebase from "firebase/app"

import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAEk37rgziBmkN2ANMclIwZK2KmQCnC8lo",
    authDomain: "morobat-f8edc.firebaseapp.com",
    projectId: "morobat-f8edc",
    storageBucket: "morobat-f8edc.appspot.com",
    messagingSenderId: "932965472485",
    appId: "1:932965472485:web:bcf21fb85dd3814ef71c0c",
    measurementId: "G-D78BD226DQ"
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);