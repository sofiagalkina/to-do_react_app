// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOuox5xLXiGL5RlhgQc2Yo5nf-Q1QCdTU",
  authDomain: "todo-ad50d.firebaseapp.com",
  projectId: "todo-ad50d",
  storageBucket: "todo-ad50d.appspot.com",
  messagingSenderId: "578295659908",
  appId: "1:578295659908:web:fe2551b6d617aeb5dab1d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);