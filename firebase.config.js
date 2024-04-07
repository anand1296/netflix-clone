// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2AdqydeM9-6Qr77yB5ZS7kbQDoV8-Pzs",
  authDomain: "netflix-clone-a3a9e.firebaseapp.com",
  projectId: "netflix-clone-a3a9e",
  storageBucket: "netflix-clone-a3a9e.appspot.com",
  messagingSenderId: "942525937910",
  appId: "1:942525937910:web:c0bc8302cb286b466494d7",
  measurementId: "G-W4092WY7FN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);