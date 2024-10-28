// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLv4lG9eEG9PxxPR9TZ9hPsuqrZkNlits",
  authDomain: "john-wesley-eeb1d.firebaseapp.com",
  projectId: "john-wesley-eeb1d",
  storageBucket: "john-wesley-eeb1d.appspot.com",
  messagingSenderId: "1099299564878",
  appId: "1:1099299564878:web:49c41786b1785bcff2021f",
  measurementId: "G-8ZGVE9JRJG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
