import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAsVo0G6Er9OjLLryqP5byDS4AH38ysQ6U",
  authDomain: "career-hub-cbcf0.firebaseapp.com",
  projectId: "career-hub-cbcf0",
  storageBucket: "career-hub-cbcf0.appspot.com",
  messagingSenderId: "71964346105",
  appId: "1:71964346105:web:a0eb07a9573f0e61f8c428",
  measurementId: "G-Q31N7XNH0K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app);