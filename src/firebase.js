// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXho4T7Yh3Ck-bF6Pj-jpdb1G02PvMjtc",
  authDomain: "buy-and-go-efb48.firebaseapp.com",
  projectId: "buy-and-go-efb48",
  storageBucket: "buy-and-go-efb48.firebasestorage.app",
  messagingSenderId: "356577730241",
  appId: "1:356577730241:web:8f0c501e4e66dca6e93e40",
  measurementId: "G-HZD079XY6V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth, collection, doc, setDoc };  // Export necessary Firestore functions
