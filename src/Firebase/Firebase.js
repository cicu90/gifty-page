// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { saveUserData } from "../Utils/Credentials/Credentials";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6AyKMeNrWut5E4JkI8kEarFEC2retWdo",
  authDomain: "gifty-page.firebaseapp.com",
  projectId: "gifty-page",
  storageBucket: "gifty-page.appspot.com",
  messagingSenderId: "899026053058",
  appId: "1:899026053058:web:39df9b89d5c08cf303585b",
  measurementId: "G-KMPJXLDKFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export async function signInWithEmail(email, password) {
  console.log(auth)
  return signInWithEmailAndPassword(auth, email, password)

}

export async function signFirebase(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    saveUserData(userCredential.user.uid, userCredential.user.accessToken);
    return userCredential.user.uid;
})
  .catch((error) => {
    throw new Error("Error code: " + error.code + " - " + error.message)
  });
}