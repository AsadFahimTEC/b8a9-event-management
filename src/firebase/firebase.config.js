// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXuhiKDez0Mp3w2WtK_FYOX9Rmn9ZbZNM",
  authDomain: "b8a9-event-management.firebaseapp.com",
  projectId: "b8a9-event-management",
  storageBucket: "b8a9-event-management.appspot.com",
  messagingSenderId: "510016016421",
  appId: "1:510016016421:web:8067c6ff2108b243736fcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;