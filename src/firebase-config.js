import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDsA6hp6DWHUPmb8ATPz0aMfVcF_xgQAMU",
    authDomain: "crud-4680b.firebaseapp.com",
    projectId: "crud-4680b",
    storageBucket: "crud-4680b.appspot.com",
    messagingSenderId: "958508867390",
    appId: "1:958508867390:web:63e7b8064d3098cff9966f",
    measurementId: "G-KK5G1YBP9T"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();