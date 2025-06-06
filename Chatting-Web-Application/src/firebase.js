// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
// const firebaseConfig = {
//     apiKey: "AIzaSyBSG7P1VS_qCGrdBgt8epA_BPnK2q_o9Ns",
//     authDomain: "what-s-app-clone-67f42.firebaseapp.com",
//     projectId: "what-s-app-clone-67f42",
//     storageBucket: "what-s-app-clone-67f42.appspot.com",
//     messagingSenderId: "215197489330",
//     appId: "1:215197489330:web:3bc306b435d057f50111ab",
//     measurementId: "G-J6ZFPD3KH9"
//   };
//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore(); 
//   const auth = firebaseApp.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();

//   export {auth,provider};
//   export default db;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyBSG7P1VS_qCGrdBgt8epA_BPnK2q_o9Ns",
  authDomain: "what-s-app-clone-67f42.firebaseapp.com",
  projectId: "what-s-app-clone-67f42",
  storageBucket: "what-s-app-clone-67f42.appspot.com",
  messagingSenderId: "215197489330",
  appId: "1:215197489330:web:3bc306b435d057f50111ab",
  measurementId: "G-J6ZFPD3KH9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;