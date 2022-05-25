import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import 'firebase/compat/auth';
const config = require('./app_config.json');

// Firebase
export const firebase_app = firebase.initializeApp({
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  databaseURL: config.firebase.databaseURL,
  projectId: config.firebase.projectId,
  storageBucket: config.firebase.storageBucket,
  messagingSenderId: config.firebase.messagingSenderId,
  measurementId: config.firebase.measurementId,
  appId: config.firebase.appId,
});

// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const facebookProvider = new firebase.auth.FacebookAuthProvider();
// export const twitterProvider = new firebase.auth.TwitterAuthProvider();
// export const githubProvider = new firebase.auth.GithubAuthProvider();
// export const db = firebase.firestore();



