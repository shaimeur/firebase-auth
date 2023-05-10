// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyBJD2FT_xxBpJvGEcQjMYGqavo6ViRZzLw",
    authDomain: "fir-auth-f6131.firebaseapp.com",
    projectId: "fir-auth-f6131",
    storageBucket: "fir-auth-f6131.appspot.com",
    messagingSenderId: "245319560423",
    appId: "1:245319560423:web:100ae3b0068b5136b28642",
    measurementId: "G-L3Q995ZHMN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth()


export { app, auth }