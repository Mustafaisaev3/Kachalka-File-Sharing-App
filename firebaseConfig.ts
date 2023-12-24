// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBguLWfMpdKrVngC2mLv1rZH1LXSWGBto",
  authDomain: "file-sharing-app-fd80b.firebaseapp.com",
  projectId: "file-sharing-app-fd80b",
  storageBucket: "file-sharing-app-fd80b.appspot.com",
  messagingSenderId: "1030136240378",
  appId: "1:1030136240378:web:dd12ca39941c1228339143",
  measurementId: "G-JNNWDQFFE5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);