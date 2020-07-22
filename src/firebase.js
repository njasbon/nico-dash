import firebase from 'firebase';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBJhPnWkRs9PGhBXxLWsoscHE6VpL5_aEw",
    authDomain: "first-firebase-2de0d.firebaseapp.com",
    databaseURL: "https://first-firebase-2de0d.firebaseio.com",
    projectId: "first-firebase-2de0d",
    storageBucket: "first-firebase-2de0d.appspot.com",
    messagingSenderId: "982507566851",
    appId: "1:982507566851:web:49246e9b5a6f57997e9b36",
    measurementId: "G-RCBRNPFRDS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;