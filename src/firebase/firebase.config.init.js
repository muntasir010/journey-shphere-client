// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-dmgmMXegwweoc3PJvsK6J7p-18WuRiA",
  authDomain: "simple-firebase-23028.firebaseapp.com",
  projectId: "simple-firebase-23028",
  storageBucket: "simple-firebase-23028.firebasestorage.app",
  messagingSenderId: "292196680506",
  appId: "1:292196680506:web:7fb6057af0d8ad7fa10603"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)