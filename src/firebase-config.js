import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHZ4mgLTSxI9Vw0S1yClWFFVb1Evv0OU4",
  authDomain: "vineashopping-cart.firebaseapp.com",
  projectId: "vineashopping-cart",
  storageBucket: "vineashopping-cart.appspot.com",
  messagingSenderId: "225091701500",
  appId: "1:225091701500:web:2e2f6a6197592535e92579"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);