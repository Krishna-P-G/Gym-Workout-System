// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { serverTimestamp } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA-5_tr2gFQannJgJdM4hwHSe4k0RCi1Tc",
  authDomain: "login-signup-920cb.firebaseapp.com",
  projectId: "login-signup-920cb",
  storageBucket: "login-signup-920cb.appspot.com",
  messagingSenderId: "818254988175",
  appId: "1:818254988175:web:b3761fa05c75660624c1fa"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = serverTimestamp();
export { auth, provider, timestamp };
