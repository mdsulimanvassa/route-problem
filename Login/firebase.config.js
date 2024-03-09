// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbHaKVZx8uiahgAaTIKHV37xZf3E42VEM",
  authDomain: "burj-all-arab-83f61.firebaseapp.com",
  projectId: "burj-all-arab-83f61",
  storageBucket: "burj-all-arab-83f61.appspot.com",
  messagingSenderId: "220760607255",
  appId: "1:220760607255:web:a1c1ebb13c17b66ba3ea52"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
