import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSDYmO4RYnCgkTlCgyJ8_1l_YRq3C07Iw",
  authDomain: "omporphia-9d824.firebaseapp.com",
  projectId: "omporphia-9d824",
  storageBucket: "omporphia-9d824.appspot.com",
  messagingSenderId: "606747479884",
  appId: "1:606747479884:web:89a714eaf67d2ce6d0c9e9",
  measurementId: "G-BJ26FRP8B5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, db, provider, storage };
