//Firebase have many utilities so we import only few which we want instead of complete firebase at once... like we imported firestore,suth etc
import firebase from 'firebase/app'; //this base import is useful because all the auth and firesotre are automatially connected to the firebase keyword which we impoted
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyC9qWZrYXZJdYdJkBQ3Lgpv3SA5IoQS7cc",
    authDomain: "crwn-db-9f540.firebaseapp.com",
    projectId: "crwn-db-9f540",
    storageBucket: "crwn-db-9f540.appspot.com",
    messagingSenderId: "3292108503",
    appId: "1:3292108503:web:e1100ec97b02ecf5608292",
    measurementId: "G-2GW589V8L4"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;

