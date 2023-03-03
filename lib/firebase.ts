// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCMuKZWlxquFXBnnhUcgZdvVcBpS5EjhjA",
	authDomain: "my-unsplash-master.firebaseapp.com",
	projectId: "my-unsplash-master",
	storageBucket: "my-unsplash-master.appspot.com",
	messagingSenderId: "84836422702",
	appId: "1:84836422702:web:a61894c0d9a0e02c3e7bbf",
	measurementId: "G-3JSD31MJVZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const login = () => signInWithPopup(auth,provider)
export const logout = () => signOut(auth)