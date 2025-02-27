import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getApps } from "firebase/app";

document.addEventListener('DOMContentLoaded', function(){ // Executes this code when the webpage is loaded

  // Our web app's Firebase configuration
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
  if (getApps().length < 1) {
    const app = initializeApp(firebaseConfig);
  }
  let analytics;
  if (typeof window !== 'undefined') {
      analytics = getAnalytics(app);
  }
  console.log(analytics);
});