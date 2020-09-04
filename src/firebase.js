import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBOmJyi_g_s2VMrRGY5Odl2qaRmbdqflVk",
  authDomain: "clone-react-e917c.firebaseapp.com",
  databaseURL: "https://clone-react-e917c.firebaseio.com",
  projectId: "clone-react-e917c",
  storageBucket: "clone-react-e917c.appspot.com",
  messagingSenderId: "759356406884",
  appId: "1:759356406884:web:406c95963435f87287f371",
  measurementId: "G-RM4TYF2Q8V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
