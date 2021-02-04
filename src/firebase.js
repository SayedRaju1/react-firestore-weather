import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCsQZvYB_-8Vx9-N4bROdRkxjXcFK9Z6wA",
    authDomain: "react-firestore-cd800.firebaseapp.com",
    projectId: "react-firestore-cd800",
    storageBucket: "react-firestore-cd800.appspot.com",
    messagingSenderId: "274126449318",
    appId: "1:274126449318:web:b74c4ddc339509c646a267"
};

firebase.initializeApp(firebaseConfig);

export default firebase;