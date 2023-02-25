import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0x5o9SYeBStMzmDfVMKBfv1uisCvXcUA",
    authDomain: "waffle-app-9c80a.firebaseapp.com",
    projectId: "waffle-app-9c80a",
    storageBucket: "waffle-app-9c80a.appspot.com",
    messagingSenderId: "216338483339",
    appId: "1:216338483339:web:327e5c800070294f6eac8e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {provider, auth};
