// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// console.log(import.meta.env.VITE_apiKey)
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6dVNpxf51kvqImDhdG07iHbZr5xdJJUM",
    authDomain: "auth-router-contex-fd6bb.firebaseapp.com",
    projectId: "auth-router-contex-fd6bb",
    storageBucket: "auth-router-contex-fd6bb.appspot.com",
    messagingSenderId: "693180338821",
    appId: "1:693180338821:web:95b4af26501d273f3f8fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app