// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBLQmEjK-8kLOsUdkx4Q3zo5nBYm4s4Idw",
  authDomain: "vue-chat-app-dc1c5.firebaseapp.com",
  projectId: "vue-chat-app-dc1c5",
  storageBucket: "vue-chat-app-dc1c5.appspot.com",
  messagingSenderId: "122381300110",
  appId: "1:122381300110:web:95b41149765b03bd14f4df",
  measurementId: "G-ZQCW7M9HQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)
const auth = getAuth(app)
const now = Timestamp.now()

export {db, auth, now}
