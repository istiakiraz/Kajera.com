// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhIqNlttHbm5cMSBw8E-8BLCifZln26c0",
  authDomain: "kajero-auth.firebaseapp.com",
  projectId: "kajero-auth",
  storageBucket: "kajero-auth.firebasestorage.app",
  messagingSenderId: "466774998039",
  appId: "1:466774998039:web:fdb2a0aeb8225de377b052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);