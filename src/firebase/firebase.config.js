// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeaAN8QR9w6KVpPzlPCyJaJAPWhpOm8h4",
  authDomain: "bistro-boss-c1655.firebaseapp.com",
  projectId: "bistro-boss-c1655",
  storageBucket: "bistro-boss-c1655.appspot.com",
  messagingSenderId: "80587214659",
  appId: "1:80587214659:web:2cc5990fdd2c11827969f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); */