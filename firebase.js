import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// insert config
const firebaseConfig = {
    apiKey: "API KEY",
    authDomain: "AUTH DOMAIN",
    projectId: "PROJECT ID",
    storageBucket: "STORAGE BUCKET",
    messagingSenderId: "MESSAGING SENDER ID",
    appId: "APP ID"  
};
  

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}