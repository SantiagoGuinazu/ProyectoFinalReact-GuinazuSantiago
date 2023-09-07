
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAQhNSCAALTX4W3pZciWpkttj-VPxQqqxo",
    authDomain: "myecommerce-guinazusantiago.firebaseapp.com",
    projectId: "myecommerce-guinazusantiago",
    storageBucket: "myecommerce-guinazusantiago.appspot.com",
    messagingSenderId: "199356615243",
    appId: "1:199356615243:web:eacd12c382795c35f8dbce"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)