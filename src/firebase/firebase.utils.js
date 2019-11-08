import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCoqRJ7Rj6mmaSLxoYsGkowJTov-nKJlnE",
    authDomain: "mart-clothings.firebaseapp.com",
    databaseURL: "https://mart-clothings.firebaseio.com",
    projectId: "mart-clothings",
    storageBucket: "mart-clothings.appspot.com",
    messagingSenderId: "1005449890374",
    appId: "1:1005449890374:web:405026a36b399a84cd5847"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;