import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnDhPpCSBKsv-KzOCyjcE0wiodF2KWG_8",
  authDomain: "instagramclone-f6cc7.firebaseapp.com",
  projectId: "instagramclone-f6cc7",
  storageBucket: "instagramclone-f6cc7.appspot.com",
  messagingSenderId: "102969412434",
  appId: "1:102969412434:web:68c3c0af32fd3f2748888b",
  measurementId: "G-RR4ZX8LH78"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage = firebaseApp.storage();
  export { auth, db ,storage};
