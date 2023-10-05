// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGUtxcr0brzzEoo8HVQ3Pp9LWQeFc2Qm4",
  authDomain: "career-hub-90087.firebaseapp.com",
  projectId: "career-hub-90087",
  storageBucket: "career-hub-90087.appspot.com",
  messagingSenderId: "170846564548",
  appId: "1:170846564548:web:6710f90e1fa813a81ad991"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth