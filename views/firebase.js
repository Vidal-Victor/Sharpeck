// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import  firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {

  apiKey: "AIzaSyBFOeo0Dubt5Qf4ICkUeSIgDWLap-xvooc",

  authDomain: "sharpeckbd-fc5fd.firebaseapp.com",

  databaseURL: "https://sharpeckbd-fc5fd-default-rtdb.firebaseio.com",

  projectId: "sharpeckbd-fc5fd",

  storageBucket: "sharpeckbd-fc5fd.appspot.com",

  messagingSenderId: "887798460053",

  appId: "1:887798460053:web:6ce0005f7fcfd2d571359c"

};

const app = firebase.initializeApp(firebaseConfig);
export default app;



// import 'firebase/storage';

// var firebaseConfig = {
//     apiKey: "AIzaSyBFOeo0Dubt5Qf4ICkUeSIgDWLap-xvooc",
//     authDomain: "sharpeckbd-fc5fd.firebaseapp.com",
//     projectId: "sharpeckbd-fc5fd",
//     storageBucket: "sharpeckbd-fc5fd.appspot.com",
//     messagingSenderId: "887798460053",
//     appId: "1:887798460053:web:6ce0005f7fcfd2d571359c"
//   };
//   //initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   export const database = firebase.firestore();