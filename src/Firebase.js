// firebase.ts
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
//import { createUserWithEmailAndPassword, Auth } from "firebase/auth"

const firebaseConfig = {

    apiKey: "AIzaSyCGxKElsrM4ALU-WsKWHu28wjO4f8Tnmzc",
    authDomain: "carefinder-project-3c4f4.firebaseapp.com",
    projectId: "carefinder-project-3c4f4",
    storageBucket: "carefinder-project-3c4f4.appspot.com",
    messagingSenderId: "750161102282",
    appId: "1:750161102282:web:b81df3b3c73bc4e554bb33",
    measurementId: "G-79CFGZ781P"
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
