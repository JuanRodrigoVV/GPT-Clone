import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6S6hrUdgNTC0v7QIQp0xCBdyTsuqzr6s",
  authDomain: "gpt-clone-7a57c.firebaseapp.com",
  projectId: "gpt-clone-7a57c",
  storageBucket: "gpt-clone-7a57c.appspot.com",
  messagingSenderId: "433685546281",
  appId: "1:433685546281:web:ffad61ef27908a99286338",
  measurementId: "G-N0R1VTLEQ2"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db};