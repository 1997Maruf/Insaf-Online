// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN9YUQvCFysSKp78dPUIrwI3JL6Ry4wHw",
  authDomain: "insaf-online.firebaseapp.com",
  projectId: "insaf-online",
  storageBucket: "insaf-online.firebasestorage.app",
  messagingSenderId: "284945012710",
  appId: "1:284945012710:web:89d6782e76c8ae17622827",
  measurementId: "G-BMJZMEK6BS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
