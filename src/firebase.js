// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "তোমার API key",
//     authDomain: "তোমার domain",
//     projectId: "তোমার project ID",
//     storageBucket: "তোমার storage bucket",
//     messagingSenderId: "তোমার sender ID",
//     appId: "তোমার app ID",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);


// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Authentication ব্যবহার করলে এটা দরকার হবে


// তোমার Firebase configuration
const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,

  apiKey: "AIzaSyDSozfaUx_oYzoeCXt4n1HnnlItS204B44",
  authDomain: "assainment9-d6e2c.firebaseapp.com",
  projectId: "assainment9-d6e2c",
  storageBucket: "assainment9-d6e2c.firebasestorage.app",
  messagingSenderId: "686014662923",
  appId: "1:686014662923:web:da5d872494311a45d17a0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Auth instance export করো যাতে অন্য ফাইল থেকে ব্যবহার করা যায়
export const auth = getAuth(app);
export default app;
