import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firebase-firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB60mCPVtPx8OoBzC-MELaVkYYA3wSC5bY",
    authDomain: "media-upload-2d552.firebaseapp.com",
    databaseURL: "https://media-upload-2d552.firebaseio.com",
    projectId: "media-upload-2d552",
    storageBucket: "media-upload-2d552.appspot.com",
    messagingSenderId: "820697888472",
    appId: "1:820697888472:web:6d88b6b25a1af3d34149ad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};


//: if request.auth != null