// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJj_FTtLAXYpSed46IZQ2iG-Qv_wBnKYw",
  authDomain: "hackumbc-2022.firebaseapp.com",
  projectId: "hackumbc-2022",
  storageBucket: "hackumbc-2022.appspot.com",
  messagingSenderId: "162568594089",
  appId: "1:162568594089:web:7999aa75f0845fc4807fb8",
  measurementId: "G-5R7TCW06EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();