// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLjJNtlCTFhEWfV79qnMmunYJph5KSbi0",
  authDomain: "twitter-bcae2.firebaseapp.com",
  projectId: "twitter-bcae2",
  storageBucket: "twitter-bcae2.appspot.com",
  messagingSenderId: "41923386201",
  appId: "1:41923386201:web:bff2ce827453f2e9554a48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);