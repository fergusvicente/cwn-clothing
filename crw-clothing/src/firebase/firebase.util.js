import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB_gZGGJZ5kyO0msT2D_LDReLXt_TwwEyA",
    authDomain: "tienda-app-crwn.firebaseapp.com",
    databaseURL: "https://tienda-app-crwn.firebaseio.com",
    projectId: "tienda-app-crwn",
    storageBucket: "tienda-app-crwn.appspot.com",
    messagingSenderId: "830634533825",
    appId: "1:830634533825:web:9bcb994f36a7806a150540",
    measurementId: "G-K1KLN694LK"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;