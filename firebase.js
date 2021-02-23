import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGTn-UxajD9BloeVD5EdHp_sJDCmNRsDQ",
  authDomain: "chatapp-signal-clone.firebaseapp.com",
  projectId: "chatapp-signal-clone",
  storageBucket: "chatapp-signal-clone.appspot.com",
  messagingSenderId: "324978239490",
  appId: "1:324978239490:web:5d8a5b43bb491c0af19f1b",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
