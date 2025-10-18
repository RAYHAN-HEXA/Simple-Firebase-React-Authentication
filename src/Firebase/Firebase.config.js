
// Do not send firebase public reprository keys to anyone. This is a public key and is safe to share.


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkdOVQ6rtSv5hQCG7pX7Ays0Gt1l3ngeE",
  authDomain: "react-authenticaion-82273.firebaseapp.com",
  projectId: "react-authenticaion-82273",
  storageBucket: "react-authenticaion-82273.firebasestorage.app",
  messagingSenderId: "383202962641",
  appId: "1:383202962641:web:5ac9b041f8b69591bf69f0",
  measurementId: "G-702C1C18SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)