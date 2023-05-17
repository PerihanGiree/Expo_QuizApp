// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

createUserWithEmailAndPassword(authh, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

const firebaseConfig = {
  apiKey: "AIzaSyB138CER3QXqH-SBDI9rIhKrRgYgiX_8oA",
  authDomain: "expoquizapp.firebaseapp.com",
  projectId: "expoquizapp",
  storageBucket: "expoquizapp.appspot.com",
  messagingSenderId: "610626216397",
  appId: "1:610626216397:web:05fbdd3f32b9e93c252484",
  measurementId: "G-KT35LTR7GD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, auth };
