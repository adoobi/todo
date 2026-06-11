import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyCZT-6aJyz2Hnwe3QqV1kHbjTKvvGiv0Yc",
  authDomain: "todo-adoobi.firebaseapp.com",
  projectId: "todo-adoobi",
  storageBucket: "todo-adoobi.firebasestorage.app",
  messagingSenderId: "284145771627",
  appId: "1:284145771627:web:91be47045b7e4d3a9bbd2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


// https://firebase.google.com/docs/firestore/manage-data/add-data