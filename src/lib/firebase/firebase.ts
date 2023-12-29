// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9HD-OwZjIYMoL6HKlOeFyYced4pu6gjo",
  authDomain: "blog-e3d38.firebaseapp.com",
  projectId: "blog-e3d38",
  storageBucket: "blog-e3d38.appspot.com",
  messagingSenderId: "903449903129",
  appId: "1:903449903129:web:42016c24dfb70a2c922a88",
  measurementId: "G-6HCMESR0TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

export {
  app,
  auth,
  db,
  storage
}
