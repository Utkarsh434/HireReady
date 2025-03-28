import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAHAZ91DyFAAp4DzkPpzI9UiEhoDstjXrA",
  authDomain: "hireready-57fde.firebaseapp.com",
  projectId: "hireready-57fde",
  storageBucket: "hireready-57fde.firebasestorage.app",
  messagingSenderId: "455497588628",
  appId: "1:455497588628:web:615629fadd7e327744b981",
  measurementId: "G-1SF6JZHLTW"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);