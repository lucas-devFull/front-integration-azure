import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCz61kBYieCyC_smGLwMOb_WGy2Zxowrwo",
  authDomain: "devops-unimar.firebaseapp.com",
  projectId: "devops-unimar",
  storageBucket: "devops-unimar.firebasestorage.app",
  messagingSenderId: "13584870468",
  appId: "1:13584870468:web:e4717c2a45c2bbf76de011",
  measurementId: "G-NZVRYQYCBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)