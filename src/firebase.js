// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";

// // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCBY0XoJcbOALQzWKGX_QpDYX8B3fDQ4Jw",
//   authDomain: "virtual-incubator-1d7dd.firebaseapp.com",
//   projectId: "virtual-incubator-1d7dd",
//   storageBucket: "virtual-incubator-1d7dd.appspot.com",
//   messagingSenderId: "441254254831",
//   appId: "1:441254254831:web:50b7d7ca31545bd67a631a",
//   measurementId: "G-X4QVHNDNLB",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// // Google Sign-In
// const signInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, googleProvider);
//     return result.user;
//   } catch (error) {
//     console.error("Google Sign-In Error:", error.message);
//     throw error;
//   }
// };

// // Logout Function
// const logout = async () => {
//   try {
//     await signOut(auth);
//     localStorage.removeItem("token");
//   } catch (error) {
//     console.error("Logout Error:", error.message);
//   }
// };

// // Exports
// export { auth, googleProvider, signInWithGoogle, logout };


import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Firebase config using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Google Sign-In
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
    throw error;
  }
};

// Logout Function
const logout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("token");
  } catch (error) {
    console.error("Logout Error:", error.message);
  }
};

// Exports
export { auth, googleProvider, signInWithGoogle, logout };
