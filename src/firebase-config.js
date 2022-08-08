import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnI5jmV0jGozEbEw3LvN83Mkck6MKAUnI",
  authDomain: "store-management-system-3ec8d.firebaseapp.com",
  projectId: "store-management-system-3ec8d",
  storageBucket: "store-management-system-3ec8d.appspot.com",
  messagingSenderId: "137011114822",
  appId: "1:137011114822:web:0654523af8166ebc35eb47",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
