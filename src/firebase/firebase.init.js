// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoyX4gq-SQ8KIdl_Gco4TnIehL3-Ccavo",
  authDomain: "user-email-password-auth.firebaseapp.com",
  projectId: "user-email-password-auth",
  storageBucket: "user-email-password-auth.appspot.com",
  messagingSenderId: "989176777465",
  appId: "1:989176777465:web:02b13b70f15b37465a3028"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;