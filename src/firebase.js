import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCKDoRt4l65MTNDx_GZrHi3FJIIMPOHn4s",
  authDomain: "taskproject-71f04.firebaseapp.com",
  projectId: "taskproject-71f04",
  storageBucket: "taskproject-71f04.appspot.com",
  messagingSenderId: "390731396096",
  appId: "1:390731396096:web:c50cbc465e629af4c614e5",
  databaseURL:
    "https://taskproject-71f04-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
