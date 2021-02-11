import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAMtafqsyrfJgkkBGAd9huwQcRMKuFHTeI",
    authDomain: "slack-clone-apps.firebaseapp.com",
    projectId: "slack-clone-apps",
    storageBucket: "slack-clone-apps.appspot.com",
    messagingSenderId: "1031024674399",
    appId: "1:1031024674399:web:f4da9452175caed1a3fdea",
    measurementId: "G-52C4GPLTX9"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebaseApp.auth();

  const provider=new firebase.auth.GoogleAuthProvider();


  export default db;

  export {auth,provider}