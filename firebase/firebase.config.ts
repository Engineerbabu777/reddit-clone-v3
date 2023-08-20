
import firebase, { getApps, initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider, GithubAuthProvider} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAYMlDPaeV4wnYEYBP-a3r7CobjjGy5hzc",
    authDomain: "reddit-clone-d9874.firebaseapp.com",
    projectId: "reddit-clone-d9874",
    storageBucket: "reddit-clone-d9874.appspot.com",
    messagingSenderId: "451124952680",
    appId: "1:451124952680:web:7b6a76a0cde38e7f5285dd"
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const google = new GoogleAuthProvider();

  export {app, auth, db, storage, google};