"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.db = void 0;
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const firestore_1 = require("firebase/firestore");
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
const app = (0, app_1.initializeApp)(firebaseConfig);
const db = (0, firestore_1.getFirestore)(app);
exports.db = db;
const auth = (0, auth_1.getAuth)(app);
exports.auth = auth;
