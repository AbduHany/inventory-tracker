// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHSEqcRBxSmZsB1RQT3tjxhxyXtRmnegs",
    authDomain: "inventory-manager-14fb3.firebaseapp.com",
    projectId: "inventory-manager-14fb3",
    storageBucket: "inventory-manager-14fb3.appspot.com",
    messagingSenderId: "231760544189",
    appId: "1:231760544189:web:f7792d3448b039599392d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);