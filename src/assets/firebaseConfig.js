import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDywpCqlpz7W6f1b4AZVAmil_XNwllyiSo",
  authDomain: "storybyte-5e56d.firebaseapp.com",
  projectId: "storybyte-5e56d",
  storageBucket: "storybyte-5e56d.appspot.com",
  messagingSenderId: "258762191448",
  appId: "1:258762191448:web:aee9de2376ea6f7f2c902d",
  measurementId: "G-DFH5CHQYN8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
