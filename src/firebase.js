// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYRrCoy9FP3EJ5Yw73nGvjfEeo169JaBg",
  authDomain: "react-disney-plus-app-86801.firebaseapp.com",
  projectId: "react-disney-plus-app-86801",
  storageBucket: "react-disney-plus-app-86801.appspot.com",
  messagingSenderId: "648913301085",
  appId: "1:648913301085:web:4a0362d4aa70ecd6f7e7b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;