// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCTUfutd-2qwuw11Hi5SQlRM-Ky4Xm510E",
  authDomain: "kissan-auction-8425c.firebaseapp.com",
    databaseURL: "https://kissan-auction-8425c-default-rtdb.firebaseio.com",
  projectId: "kissan-auction-8425c",
  storageBucket: "kissan-auction-8425c.firebasestorage.app",
  messagingSenderId: "14727101238",
  appId: "1:14727101238:web:f9f6f537d606e7e35e5197"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
