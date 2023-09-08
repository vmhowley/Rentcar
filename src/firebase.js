// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue  } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY4U0OJLo-3aaQj4DPxHvD8sFggNdimQE",
  authDomain: "rentcar-56c4d.firebaseapp.com",
  databaseURL: "https://rentcar-56c4d-default-rtdb.firebaseio.com",
  projectId: "rentcar-56c4d",
  storageBucket: "rentcar-56c4d.appspot.com",
  messagingSenderId: "47511707971",
  appId: "1:47511707971:web:cf0027bb8577691ab68ff6",
  measurementId: "G-2B6SNF8SQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db