// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "তোমার API key",
    authDomain: "তোমার domain",
    projectId: "তোমার project ID",
    storageBucket: "তোমার storage bucket",
    messagingSenderId: "তোমার sender ID",
    appId: "তোমার app ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
