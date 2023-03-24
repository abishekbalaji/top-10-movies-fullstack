import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA26toHY1vs2n8nSXH3vsqNU0VySz5V4_k",
  authDomain: "top-10-movies-c7a6f.firebaseapp.com",
  projectId: "top-10-movies-c7a6f",
  storageBucket: "top-10-movies-c7a6f.appspot.com",
  messagingSenderId: "758268832065",
  appId: "1:758268832065:web:52f0e867b877a6da3519c0",
};

initializeApp(firebaseConfig);

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInUserWithGooglePopup = async () =>
  await signInWithPopup(auth, googleProvider);

export const signOutUser = async () => await signOut(auth);
