import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXNYz93-dtavesKKLVRj4Eeji22VOTFtw",
  authDomain: "iknite-motors.firebaseapp.com",
  projectId: "iknite-motors",
  storageBucket: "iknite-motors.appspot.com",
  messagingSenderId: "444275645628",
  appId: "1:444275645628:web:3cfb27e12b8a5b0b47c4b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase storage reference
const storage = getStorage(app);

export default storage;
