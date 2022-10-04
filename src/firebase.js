import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAHZ4mgLTSxI9Vw0S1yClWFFVb1Evv0OU4",
    authDomain: "vineashopping-cart.firebaseapp.com",
    projectId: "vineashopping-cart",
    storageBucket: "vineashopping-cart.appspot.com",
    messagingSenderId: "225091701500",
    appId: "1:225091701500:web:2e2f6a6197592535e92579"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();

export { auth, db };