import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC0G5fOMKCHJECajqFc4jWVRfLdybqFFi0",
  authDomain: "devops-unimar-6a210.firebaseapp.com",
  projectId: "devops-unimar-6a210",
  storageBucket: "devops-unimar-6a210.firebasestorage.app",
  messagingSenderId: "1073679118662",
  appId: "1:1073679118662:web:4860ae412484ac8c063547",
  measurementId: "G-K8LRS3J7P1"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { db }