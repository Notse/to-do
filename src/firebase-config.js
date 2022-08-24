// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDLJopweBw5wwlWxZBKSKGXIXnal00L4ME",
  authDomain: "nikhil-55781.firebaseapp.com",
  projectId: "nikhil-55781",
  storageBucket: "nikhil-55781.appspot.com",
  messagingSenderId: "1032729640294",
  appId: "1:1032729640294:web:ab2c393c0fc8fc4be5dca7",
  measurementId: "G-T0JFKJDT7M",
  databaseURL: "https://nikhil-55781-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// https://todo-notse.netlify.app/
export const authentication = getAuth(app);
export const db = getDatabase(app);