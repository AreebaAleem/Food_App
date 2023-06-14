// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDOfHD5ZFO9EcNHzlO_tx9RmQ8x9UDfYuI',
  authDomain: 'fastfood-c442f.firebaseapp.com',
  projectId: 'fastfood-c442f',
  storageBucket: 'fastfood-c442f.appspot.com',
  messagingSenderId: '1034423636130',
  appId: '1:1034423636130:web:295f95d3b5f41e42f2c7fb',
  measurementId: 'G-GYBM9G2834',
  databaseURL: "https://fastfood-c442f-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp (firebaseConfig);
// const analytics = getAnalytics (app);
export default app;
