// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAtiL4UiJaivEH8goS0loj1KKl162MIsA",
    authDomain: "fire-react-2.firebaseapp.com",
    projectId: "fire-react-2",
    storageBucket: "fire-react-2.firebasestorage.app",
    messagingSenderId: "962718849892",
    appId: "1:962718849892:web:b0449ef84a52b30419b871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)