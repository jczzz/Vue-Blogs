import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  // ENTER FIREBASE CONFIG HERE
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
