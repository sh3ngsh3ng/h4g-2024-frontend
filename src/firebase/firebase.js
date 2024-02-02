// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBln660x8i9OQLBvUMqx78tm26amXRu3Fg",
  authDomain: "volunteerwave-auth.firebaseapp.com",
  projectId: "volunteerwave-auth",
  storageBucket: "volunteerwave-auth.appspot.com",
  messagingSenderId: "816439928608",
  appId: "1:816439928608:web:187f5aecfa4064b02ed945"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

// export const firebase = firebase;
