import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getApps } from "firebase/app";
import {getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCgkYCq7PFOcarUEtjaYVrf3QcZkLlZEEk",
    authDomain: "volunteervolume-91e20.firebaseapp.com",
    projectId: "volunteervolume-91e20",
    storageBucket: "volunteervolume-91e20.firebasestorage.app",
    messagingSenderId: "1020304409073",
    appId: "1:1020304409073:web:81fe0ae39bc5effc130450",
    measurementId: "G-P3JWNGQ1TE",
    databaseURL: "https://volunteervolume-91e20-default-rtdb.firebaseio.com/"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Ref to database services
const db = getDatabase(app);

document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  set(ref(db, 'user/' + document.getElementById("firstname").value), {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
  });
  alert("Login Successful");
})

let analytics;
if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}
console.log(analytics);