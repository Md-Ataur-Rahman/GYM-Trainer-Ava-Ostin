import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAk9VdeulSLdlCz4fr2LZJsE-hr03V3sgY",
  authDomain: "gym-trainer-d3b68.firebaseapp.com",
  projectId: "gym-trainer-d3b68",
  storageBucket: "gym-trainer-d3b68.appspot.com",
  messagingSenderId: "965296654281",
  appId: "1:965296654281:web:b7e23ff125aef1b6624a18",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
