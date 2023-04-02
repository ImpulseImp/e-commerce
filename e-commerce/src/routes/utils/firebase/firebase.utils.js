import { initializeApp } from 'firebase/app';
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyAl_GO_W1Tjsj3yRfRz8nx3jwjDCSLd1mA',
  authDomain: 'crown-clothing-db-f5be7.firebaseapp.com',
  projectId: 'crown-clothing-db-f5be7',
  storageBucket: 'crown-clothing-db-f5be7.appspot.com',
  messagingSenderId: '492993098833',
  appId: '1:492993098833:web:5cc7aedc03ebda1d323470',
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithGooglePopup(auth, provider);
};
