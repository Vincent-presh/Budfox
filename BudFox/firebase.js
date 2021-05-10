// firebase.js
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
//import 'firebase/firestore';
//import 'firebase/storage';
const fire = ({
    apiKey: "AIzaSyDIbCuKEYsOlAroo9e96m_uqzTGTPsKWyQ",
    authDomain: "brick-fin.firebaseapp.com",
    databaseURL: "https://brick-fin-default-rtdb.firebaseio.com",
    projectId: "brick-fin",
    storageBucket: "brick-fin.appspot.com",
    messagingSenderId: "147053141410",
    appId: "1:147053141410:web:06c1e8a94b9d4f34cb66fb",
    measurementId: "G-01B4RJYKSP"
});

const app = firebase.initializeApp(fire);
export const auth = firebase.auth();
//export const db = fire.firestore();
export default {
    app
};