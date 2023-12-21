import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
      // Your web app's Firebase configuration here
  // See https://firebase.google.com/docs/web/setup#add-sdks-initialize
  apiKey: 'AIzaSyAoW4AFXnRH6tGnkDnSSPaqBsuhwCMuXwo',
  authDomain: 'kkn02ngijo.firebaseapp.com',
  databaseURL: 'https://kkn02ngijo.firebaseio.com',
  projectId: 'kkn02ngijo',
  storageBucket: 'kkn02ngijo.appspot.com',
  messagingSenderId: 'SENDER_ID',
  appId: 'APP_ID',
  measurementId: 'G-MEASUREMENT_ID',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };