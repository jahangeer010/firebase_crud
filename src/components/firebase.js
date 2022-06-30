// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTKsiMWhao0RZDtyHTbd6IG2xHQNplWKQ",
  authDomain: "studentapp010.firebaseapp.com",
  databaseURL: "https://studentapp010-default-rtdb.firebaseio.com",
  projectId: "studentapp010",
  storageBucket: "studentapp010.appspot.com",
  messagingSenderId: "770762250673",
  appId: "1:770762250673:web:6b1365668b23eafbc80590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app)