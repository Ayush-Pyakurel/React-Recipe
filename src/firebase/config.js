import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCapwE2XHECI7nfhElTPa814__RV3piHbE',
  authDomain: 'cooking-recipe-directory-262ef.firebaseapp.com',
  projectId: 'cooking-recipe-directory-262ef',
  storageBucket: 'cooking-recipe-directory-262ef.appspot.com',
  messagingSenderId: '19046188371',
  appId: '1:19046188371:web:1bc7f3d84f690badb44da6',
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//initialize firestore; return object to work with firestore
const projectFirestore = firebase.firestore();

export { projectFirestore };
