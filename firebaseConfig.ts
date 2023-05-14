// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
export const FIREBASE_APP=initializeApp(firebaseConfig);
export const FIRESTORE_DB=getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH=getAuth(FIREBASE_APP);