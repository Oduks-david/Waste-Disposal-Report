// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLlJ7a1x7rSBVOARv6EjJCHBw_F15ulv0",
  authDomain: "waste-disposal-report.firebaseapp.com",
  projectId: "waste-disposal-report",
  storageBucket: "waste-disposal-report.appspot.com",
  messagingSenderId: "200809643301",
  appId: "1:200809643301:web:f031e38c99113037222ecc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Make available to other files
export { db };