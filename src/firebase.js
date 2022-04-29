// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH_6hTkN0vpSg93tRKzwlMGzLfKq8Japw",
  authDomain: "linkedin-clone-11b48.firebaseapp.com",
  projectId: "linkedin-clone-11b48",
  storageBucket: "linkedin-clone-11b48.appspot.com",
  messagingSenderId: "290625647343",
  appId: "1:290625647343:web:8ae239d5d9909ce13e611a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const dbRef = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const authRef = getAuth(app);

export { dbRef, authRef };
