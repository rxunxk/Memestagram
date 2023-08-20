// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq5tlhVPOLOFLkl59gUhIQ1Tgu53qo-Gg",
  authDomain: "memestagram-io.firebaseapp.com",
  projectId: "memestagram-io",
  storageBucket: "memestagram-io.appspot.com",
  messagingSenderId: "1029386050475",
  appId: "1:1029386050475:web:85df6d2077fa2686c450ee",
  measurementId: "G-SSE1W6L3NP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
