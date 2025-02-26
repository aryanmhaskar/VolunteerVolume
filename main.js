// Need to import the functions we need from the SDKs we need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase} from "firebase/database";
import { apiKey } from "./secret.js";
import { authDomain } from "./secret.js";
import { projectId } from "./secret.js";
import { storageBucket } from "./secret.js";
import { messagingSenderId } from "./secret.js";
import { appId } from "./secret.js";
import { measurementId } from "./secret.js";
import { databaseURL } from "./secret.js";

// TODO: Add SDKs for Firebase products that we want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Our web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
  databaseURL: databaseURL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}
console.log(analytics)

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
console.log(database)