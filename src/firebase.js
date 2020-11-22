import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8PCIb1FOMGvixQcHilha4GBHd6HF9Ze0",
  authDomain: "clone-react-e39f3.firebaseapp.com",
  databaseURL: "https://clone-react-e39f3.firebaseio.com",
  projectId: "clone-react-e39f3",
  storageBucket: "clone-react-e39f3.appspot.com",
  messagingSenderId: "396329202935",
  appId: "1:396329202935:web:e76e7c2675405b731c8ff2",
  measurementId: "G-2PQ4QS70CX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
