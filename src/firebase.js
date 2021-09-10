import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBxiOuSWIPA3vz_wSD6cZ8xMjTVUqO0HF8",
  authDomain: "todoapp-16088.firebaseapp.com",
  projectId: "todoapp-16088",
  storageBucket: "todoapp-16088.appspot.com",
  messagingSenderId: "596886115050",
  appId: "1:596886115050:web:a36e23975b74131ccfbd93",
  databaseURL: "https://bezkoder-firebase.firebaseio.com",
};

const app = firebase.initializeApp(firebaseConfig);

const firestoreDb = app.firestore();
const firebaseAuth = app.auth();
export {firebaseAuth,firestoreDb};