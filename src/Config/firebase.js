// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWQlw16fQWyNRFkPZSoUkQGKOADzucAMU",
  authDomain: "vite-contactap.firebaseapp.com",
  projectId: "vite-contactap",
  storageBucket: "vite-contactap.firebasestorage.app",
  messagingSenderId: "515390735813",
  appId: "1:515390735813:web:1da7787da8228d949af7ac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);