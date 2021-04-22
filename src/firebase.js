import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD-Y6Z_cHw1eCj8MrF4DenMt5HdpZ3ixCY",
    authDomain: "linkedin-4161c.firebaseapp.com",
    projectId: "linkedin-4161c",
    storageBucket: "linkedin-4161c.appspot.com",
    messagingSenderId: "418062321562",
    appId: "1:418062321562:web:6f72b8aea4ef793581dc23"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};