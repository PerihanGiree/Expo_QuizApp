import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU5C0b6vtaFavdb3XuPOW8-RveeG66DpA",
  authDomain: "quizapp-ecbfc.firebaseapp.com",
  projectId: "quizapp-ecbfc",
  storageBucket: "quizapp-ecbfc.appspot.com",
  messagingSenderId: "1032654223192",
  appId: "1:1032654223192:web:42fd0776c98fb4d4cbd72d",
  measurementId: "G-ZHZV7V2FYF",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
