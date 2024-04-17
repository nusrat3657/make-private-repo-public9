// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log('inside firebase config', import.meta.env.VITE_PASS);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "assignment-9-320c5.firebaseapp.com",
  projectId: "assignment-9-320c5",
  storageBucket: "assignment-9-320c5.appspot.com",
  messagingSenderId: "1061816833436",
  appId: "1:1061816833436:web:7be990ca4b562c089b6459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;