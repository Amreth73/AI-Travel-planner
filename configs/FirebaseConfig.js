// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdMKgws7nXzpwdncVLq4qWB32PFx4fi6Q",
  authDomain: "ai-traveller-app-2f022.firebaseapp.com",
  projectId: "ai-traveller-app-2f022",
  storageBucket: "ai-traveller-app-2f022.appspot.com",
  messagingSenderId: "258328686330",
  appId: "1:258328686330:web:c91a70c61d13ce7fcba343",
  measurementId: "G-QWFY89MPS1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
