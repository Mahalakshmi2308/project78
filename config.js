import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCdykA309hrPZZeM9EDaOiD27Ua7qeidRw",
    authDomain: "bartersystem-d73c6.firebaseapp.com",
    projectId: "bartersystem-d73c6",
    storageBucket: "bartersystem-d73c6.appspot.com",
    messagingSenderId: "691747603532",
    appId: "1:691747603532:web:d6a41c52e6c9b0d4ffa0e9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();