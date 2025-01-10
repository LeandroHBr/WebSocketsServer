import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaUouJHK8SJPYfDJ70gZlEA6Ca26j5hfg",
  authDomain: "projectlevelmonitoring.firebaseapp.com",
  projectId: "projectlevelmonitoring",
  storageBucket: "projectlevelmonitoring.firebasestorage.app",
  messagingSenderId: "190982776891",
  appId: "1:190982776891:web:04a89ad6e7ea6a09c5541e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
export {db,auth}