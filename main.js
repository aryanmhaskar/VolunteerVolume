// Need to import the functions we need from the SDKs we need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that we want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Our web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgkYCq7PFOcarUEtjaYVrf3QcZkLlZEEk",
  authDomain: "volunteervolume-91e20.firebaseapp.com",
  projectId: "volunteervolume-91e20",
  storageBucket: "volunteervolume-91e20.firebasestorage.app",
  messagingSenderId: "1020304409073",
  appId: "1:1020304409073:web:81fe0ae39bc5effc130450",
  measurementId: "G-P3JWNGQ1TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);