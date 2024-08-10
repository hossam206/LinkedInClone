// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBvS7KXHZQvDcQqe4RfY220ZIK3-yt9XMA",
  authDomain: "linkedin-7c070.firebaseapp.com",
  projectId: "linkedin-7c070",
  storageBucket: "linkedin-7c070.appspot.com",
  messagingSenderId: "233722655143",
  appId: "1:233722655143:web:336f04ea335d970bda0682",
  measurementId: "G-MFJBXH0NW1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
// Initialize Firestore
const storage = getStorage();

// Initialize Storage
export { auth, provider, signInWithPopup, db, storage };
