import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBGRQhxXTFc-z_UB81xGziP6YUajLhqT3E',
  authDomain: 'my-playground-project-391323.firebaseapp.com',
  projectId: 'my-playground-project-391323',
  storageBucket: 'my-playground-project-391323.appspot.com',
  messagingSenderId: '71830756335',
  appId: '1:71830756335:web:48be7de96cd98f4c8ff41a',
  measurementId: 'G-CJ08F2GTJV'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
