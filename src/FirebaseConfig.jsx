// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDATxB0F434FRBjBNP3U3tV_Z7OdCt-kkg',
  authDomain: 'dashboard-with-mui-d2c9e.firebaseapp.com',
  projectId: 'dashboard-with-mui-d2c9e',
  storageBucket: 'dashboard-with-mui-d2c9e.firebasestorage.app',
  messagingSenderId: '413081959186',
  appId: '1:413081959186:web:eff23e2dc7aec5132f11cb',
  measurementId: 'G-L16CGLBBKK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
