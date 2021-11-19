// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBFOeo0Dubt5Qf4ICkUeSIgDWLap-xvooc",

  authDomain: "sharpeckbd-fc5fd.firebaseapp.com",

  databaseURL: "https://sharpeckbd-fc5fd-default-rtdb.firebaseio.com",

  projectId: "sharpeckbd-fc5fd",

  storageBucket: "sharpeckbd-fc5fd.appspot.com",

  messagingSenderId: "887798460053",

  appId: "1:887798460053:web:6ce0005f7fcfd2d571359c"

};


// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
export default app;