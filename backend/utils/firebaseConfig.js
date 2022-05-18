const getFirebaseConfig = () => {
  return {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // The value of `databaseURL` depends on the location of the database
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };
};

export default getFirebaseConfig;
