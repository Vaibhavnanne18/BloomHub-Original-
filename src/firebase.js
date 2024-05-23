import { getApp, getApps, initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZF2yh2Ws-hVDRq9TB96RA4eys2IMqfWc",
    authDomain: "bloomhub-9ff85.firebaseapp.com",
    projectId: "bloomhub-9ff85",
    storageBucket: "bloomhub-9ff85.appspot.com",
    messagingSenderId: "864016773326",
    appId: "1:864016773326:web:30baed8f7c86e11827609f",
    measurementId: "G-WTWTDE58DD"
  };

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;