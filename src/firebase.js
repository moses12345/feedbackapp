import firebase from  'firebase'

const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "feedbackform-2d5c4.firebaseapp.com",
    projectId: "feedbackform-2d5c4",
    storageBucket: "feedbackform-2d5c4.appspot.com",
    messagingSenderId: "700xxxxxxxxx",
    appId: "1:700532xxxxxxxxxxxxxxxxxxxxxxxx"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore()
  export default db