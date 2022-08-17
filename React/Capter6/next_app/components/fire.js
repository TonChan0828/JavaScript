// Import the functions you need from the SDKs you need
// import firebase from 'firebase';
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAFCGgsO1u7YB-Lc_FWdUJJuJL1MhfoLE",
  authDomain: "myreactprctice.firebaseapp.com",
  projectId: "myreactprctice",
  storageBucket: "myreactprctice.appspot.com",
  messagingSenderId: "341952626886",
  appId: "1:341952626886:web:d8678a241e6409b2d997c7"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
