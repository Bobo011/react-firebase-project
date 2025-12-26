// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBijmuJApUYLZmS0su30SXtOkAPg4OIF4",
  authDomain: "react-firebase-project-50f0a.firebaseapp.com",
  projectId: "react-firebase-project-50f0a",
  storageBucket: "react-firebase-project-50f0a.firebasestorage.app",
  messagingSenderId: "890006509190",
  appId: "1:890006509190:web:cd2ff5a99df02c6593a307",
  measurementId: "G-XHKM9SG0MG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//db stands for database
const db = getFirestore(app);
//auth stands for authentication
const auth = getAuth(app);
//provider stands for authentication provider
const provider = new GoogleAuthProvider();

export { auth, provider, db };
