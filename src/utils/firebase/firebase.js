import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

const db = getFirestore();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const signInUserWithGooglePopup = async () =>
  await signInWithPopup(auth, googleProvider);

export const signInAuthUserWithEmailAndPassword = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

export const createUserAuthWithEmailAndPassword = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const signOutUser = async () => await signOut(auth);

export const createUserDocumentFromAuth = async (
  userAuth,
  otherDetails = {}
) => {
  if (!userAuth) return;
  const userRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const createdAt = new Date();
    const { displayName, email } = userAuth;
    const userObj = {
      displayName,
      email,
      createdAt,
      ...otherDetails,
    };
    try {
      await setDoc(userRef, userObj);
    } catch (error) {
      console.log("Error creating the user!", error.message);
    }
  }
  return userRef;
};
