import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDGCLhgXu9ZzDGM0OVkcHUZOQSJ4gOowzI",
  authDomain: "todo-5dfc0.firebaseapp.com",
  projectId: "todo-5dfc0",
  storageBucket: "todo-5dfc0.appspot.com",
  messagingSenderId: "774438502309",
  appId: "1:774438502309:web:3512d2214b3154c983324c",
  measurementId: "G-9YV1WFLNJC",
});
const db = firebaseApp.firestore();
export default db;
