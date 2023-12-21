// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPlsmUvoDIZWuXbL7SGokxvxVd1WdCSAg",
    authDomain: "task-management-f8ad5.firebaseapp.com",
    projectId: "task-management-f8ad5",
    storageBucket: "task-management-f8ad5.appspot.com",
    messagingSenderId: "74184588654",
    appId: "1:74184588654:web:ba7b89279154f23022d57f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)