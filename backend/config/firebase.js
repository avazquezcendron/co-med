import { initializeApp } from 'firebase/app';
import getFirebaseConfig from '../utils/firebaseConfig.js';

let firebaseApp;

const getFirebaseApp = () => {
  return firebaseApp;
};

const initializeFirebaseApp = () => {
  try {
    const fbConfig = getFirebaseConfig();
    firebaseApp = initializeApp(fbConfig);
    console.log(`Firebase App initilized:`.cyan.underline);
    return firebaseApp;
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export { initializeFirebaseApp, getFirebaseApp };
