// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr-tTw8fcPoVwiNaYo56Jf9p58o1yHHQI",
  authDomain: "project1-9cc2f.firebaseapp.com",
  projectId: "project1-9cc2f",
  storageBucket: "project1-9cc2f.firebasestorage.app",
  messagingSenderId: "69898919736",
  appId: "1:69898919736:web:040444b7ba2681e47c6bcd",
  measurementId: "G-VX5VPCKLX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()