// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD68BJfiXmrFKA-1P5nNAPKaoAAz4QXuUk",
    authDomain: "notes-f3e06.firebaseapp.com",
    projectId: "notes-f3e06",
    storageBucket: "notes-f3e06.firebasestorage.app",
    messagingSenderId: "410057415468",
    appId: "1:410057415468:web:448b95d23fd9f0b57e6a89",
    measurementId: "G-H1ZYHFTVH3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
