

  import firebase from "firebase";
  const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyDNWL5-MW8epT_H11QNLAZKqGrR-7RzjtU",
    authDomain: "todo-create-app.firebaseapp.com",
    databaseURL: "https://todo-create-app.firebaseio.com",
    projectId: "todo-create-app",
    storageBucket: "todo-create-app.appspot.com",
    messagingSenderId: "140557893467",
    appId: "1:140557893467:web:f4c23d8c0aa90eb28f647e",
    measurementId: "G-2XL0LMV57B"
  });

  const db = firebaseApp.firestore();

  export default db;