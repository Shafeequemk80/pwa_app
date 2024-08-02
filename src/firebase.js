import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM1VBRdQ44rZSJP5XB2PpLqfLMH42m2PA",
  authDomain: "pwa-react-85e60.firebaseapp.com",
  projectId: "pwa-react-85e60",
  storageBucket: "pwa-react-85e60.appspot.com",
  messagingSenderId: "42900436266",
  appId: "1:42900436266:web:d6a23682bc98eb76acda53",
  measurementId: "G-5QLCR79F21"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get Firebase messaging instance
const messaging = getMessaging(firebaseApp);

export { messaging, getToken, onMessage };
