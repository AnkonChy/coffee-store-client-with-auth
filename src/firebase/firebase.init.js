// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4bwvI9CJPXacJfIfdlLYhqjb45MnUoL8",
  authDomain: "coffee-store-a8c0b.firebaseapp.com",
  projectId: "coffee-store-a8c0b",
  storageBucket: "coffee-store-a8c0b.firebasestorage.app",
  messagingSenderId: "663954638173",
  appId: "1:663954638173:web:8ce6c1db328a2f3760d4b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
