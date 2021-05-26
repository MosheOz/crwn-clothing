import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDcGYDEWdoDaSvbt_ssv7gEoBmoTeNFJlc",
  authDomain: "crwn-db-6ce2a.firebaseapp.com",
  projectId: "crwn-db-6ce2a",
  storageBucket: "crwn-db-6ce2a.appspot.com",
  messagingSenderId: "550414684168",
  appId: "1:550414684168:web:4fb846722c232ca7cec1bd",
  measurementId: "G-Y6JEWXQ95G",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
