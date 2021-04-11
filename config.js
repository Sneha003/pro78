import * as firebase from 'firebase'
require('@firebase/firestore')
  
  var firebaseConfig = {
    apiKey: "AIzaSyAgCG-Wzw0EuWQJBfhHeJR6_jluC8oaA18",
    authDomain: "barterapp-8e676.firebaseapp.com",
    projectId: "barterapp-8e676",
    storageBucket: "barterapp-8e676.appspot.com",
    messagingSenderId: "408614988080",
    appId: "1:408614988080:web:90ac19ec903aaf517d40f5",
    measurementId: "G-FEE5LNBKCT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()
