// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeiQiPwUPoGq9yymSQEUljFCwGzFJO8uc",
  authDomain: "car-warehouse-b83ff.firebaseapp.com",
  projectId: "car-warehouse-b83ff",
  storageBucket: "car-warehouse-b83ff.appspot.com",
  messagingSenderId: "745261246151",
  appId: "1:745261246151:web:2f738fd153d1eeec4f40e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;