// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABapY1svYFIRgIIJJTjQEa5MTm4oT8QZA",
  authDomain: "assignment-9-320c5.firebaseapp.com",
  projectId: "assignment-9-320c5",
  storageBucket: "assignment-9-320c5.appspot.com",
  messagingSenderId: "1061816833436",
  appId: "1:1061816833436:web:7be990ca4b562c089b6459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;