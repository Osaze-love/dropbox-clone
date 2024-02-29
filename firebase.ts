import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxYP8_B_jR737EQnFARq3a4W9bQQ92P-M",
  authDomain: "dropbox-clone-98818.firebaseapp.com",
  projectId: "dropbox-clone-98818",
  storageBucket: "dropbox-clone-98818.appspot.com",
  messagingSenderId: "62385729017",
  appId: "1:62385729017:web:ff986735bcf6afec8d2128",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
